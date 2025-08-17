import { prisma } from "@/prisma"; // Or your DB client

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser({
  email,
  name,
  hashedPassword,
}: {
  email: string;
  name: string;
  hashedPassword: string;
}) {
  return prisma.user.create({
    data: { email, name, hashedPassword },
  });
}

export async function saveResetToken(userId: string, token: string) {
  return prisma.passwordReset.create({
    data: {
      userId,
      token,
      expiresAt: new Date(Date.now() + 1000 * 60 * 30), // 30 min expiry
    },
  });
}

export async function getUserByResetToken(token: string) {
  return prisma.passwordReset.findUnique({
    where: { token },
    include: { user: true },
  });
}
