import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  Bell,
  Settings,
  Link2,
  ChevronLeft,
  ChevronRight,
  Menu,
  BarChart3,
  FileText,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: FolderKanban, label: "Projects", href: "/projects" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: MessageSquare, label: "Communication", href: "/communication" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Link2, label: "Integrations", href: "/integrations" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const location = useLocation();

  const SidebarContent = () => (
    <div className="flex flex-col h-full p-1">
      <div className="flex-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <TooltipProvider key={item.label}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link to={item.href} className="w-full">
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={cn(
                        "w-full flex items-center justify-start h-10 min-h-0 py-0",
                        collapsed
                          ? "justify-center px-2"
                          : "justify-start px-2",
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && (
                        <span className="ml-2 text-base font-medium">
                          {item.label}
                        </span>
                      )}
                    </Button>
                  </Link>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right">
                    <p>{item.label}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="self-end lg:block hidden"
        onClick={onToggle}
      >
        {collapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-3 left-2 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r transition-all duration-300 z-40",
          collapsed ? "w-12" : "w-56",
          "hidden lg:block",
        )}
      >
        <SidebarContent />
      </div>
    </>
  );
}
