"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="dashboard-error">
      <h2 className="text-xl font-semibold text-red-600">
        Something went wrong
      </h2>
      <p className="mt-2 text-gray-700">{error.message}</p>
      <div className="mt-4 flex gap-4">
        <button onClick={reset} className="btn-primary">
          Try Again
        </button>
        <button onClick={() => router.push("/")} className="btn-secondary">
          Go Home
        </button>
      </div>
    </div>
  );
}
