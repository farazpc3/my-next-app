import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserByEmail, saveResetToken } from "@/lib/db";
import { sendResetEmail } from "@/lib/email";
import { generateResetToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const user = await getUserByEmail(email);

  // Always respond the same way to avoid leaking user existence
  if (!user) {
    return NextResponse.json({
      message: "If that email exists, a reset link has been sent.",
    });
  }

  const token = generateResetToken(user.id);
  await saveResetToken(user.id, token);

  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;
  await sendResetEmail(email, resetUrl);

  return NextResponse.json({ message: "Reset link sent" });
}
