import React from "react";
import { Sidebar } from "./Sidebar";
import DashboardHeader from "../dashboard/DashboardHeader";
import NotificationCenter from "../dashboard/NotificationCenter";
import MobileNavBar from "./MobileNavBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search functionality here
  };

  const handleNotificationsClick = () => {
    setIsNotificationOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex relative pb-16 sm:pb-0">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <DashboardHeader
        onSearch={handleSearch}
        onNotificationsClick={handleNotificationsClick}
      />

      <NotificationCenter
        open={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />

      <main
        className={`flex-1 pt-16 transition-all duration-300 ${sidebarCollapsed ? "lg:ml-12" : "lg:ml-56"}`}
      >
        {children}
      </main>
      <MobileNavBar />
    </div>
  );
};

export default AppLayout;
