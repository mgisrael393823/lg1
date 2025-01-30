import React from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import NotificationCenter from "./dashboard/NotificationCenter";
import WidgetGrid from "./dashboard/WidgetGrid";
import { Sidebar } from "./layout/Sidebar";

interface HomeProps {
  userName?: string;
  userAvatar?: string;
}

const Home = ({
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
}: HomeProps) => {
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
    <div className="min-h-screen bg-gray-50 flex relative">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <DashboardHeader
        userName={userName}
        userAvatar={userAvatar}
        onSearch={handleSearch}
        onNotificationsClick={handleNotificationsClick}
      />

      <NotificationCenter
        open={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />

      <main
        className={`flex-1 pt-[4.25rem] px-2 transition-all duration-300 ${sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"}`}
      >
        <div className="max-w-7xl mx-auto">
          <WidgetGrid />
        </div>
      </main>
    </div>
  );
};

export default Home;
