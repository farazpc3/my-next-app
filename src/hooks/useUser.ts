"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  username: string;
  name: string;
  avatarUrl?: string;
  bio?: string;
  // Add more fields as needed
}

export function useUser() {
  const { username } = useParams() as { username: string };
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;

    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/users/${username}`);
        if (!res.ok) throw new Error("User not found");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  return { user, loading };
}
