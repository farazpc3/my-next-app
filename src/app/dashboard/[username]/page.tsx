import { notFound } from "next/navigation";

interface User {
  username: string;
  name: string;
  avatarUrl?: string;
  bio?: string;
  // Extend as needed
}

async function getUser(username: string): Promise<User | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/users/${username}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function DashboardPage({
  params,
}: {
  params: { username: string };
}) {
  const user = await getUser(params.username);

  if (!user) return notFound();

  return (
    <div className="dashboard-page">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <p className="mt-2 text-gray-700">Username: {user.username}</p>
      {user.bio && <p className="mt-1 text-gray-600 italic">{user.bio}</p>}
    </div>
  );
}
