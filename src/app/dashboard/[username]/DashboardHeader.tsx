"use client";

import "@/styles/compoents.css";

type Props = {
  title: string;
  username?: string;
  actions?: React.ReactNode;
};

export default function DashboardHeader({ title, username, actions }: Props) {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header__left">
        <h1 className="dashboard-header__title">{title}</h1>
        {username && (
          <span className="dashboard-header__subtitle">
            Welcome, {username}
          </span>
        )}
      </div>
      <div className="dashboard-header__right">{actions}</div>
    </header>
  );
}
