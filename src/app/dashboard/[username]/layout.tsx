import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />
        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  );
}
