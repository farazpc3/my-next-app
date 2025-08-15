export default function DashboardHome() {
  return (
    <div className="dashboard-page">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      <p className="mt-2 text-gray-700">
        Select a user to view personalized analytics, settings, and more.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example user links */}
        {["faraz", "admin", "guest"].map((username) => (
          <a
            key={username}
            href={`/dashboard/${username}`}
            className="block p-4 bg-white rounded shadow hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{username}</h2>
            <p className="text-sm text-gray-600">View dashboard</p>
          </a>
        ))}
      </div>
    </div>
  );
}
