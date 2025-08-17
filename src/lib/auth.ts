import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function generateResetToken(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "30m" });
}

export function verifyResetToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
  } catch {
    return null;
  }
}

export function createSessionToken(user: { id: string; email: string }) {
  return jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "7d",
  });
}
