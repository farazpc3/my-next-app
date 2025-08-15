"use client";

import { useUser } from "@/hooks/useUser";
import Link from "next/link";

export default function Navbar() {
  const { user } = useUser();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/*Left: Logo or Title */}
        <Link href="@/app/dashboard" className="navbar-title">
          Dashboard
        </Link>

        {/* Right: User Info or Actions */}
        <div className="navbar-actions">
          {user && (
            <span className="navbar-user">
              Welcome, <strong>{user.name}</strong>
            </span>
          )}
          <Link href="/settings" className="navbar-button">
            Settings
          </Link>
        </div>
      </div>
    </header>
  );
}
