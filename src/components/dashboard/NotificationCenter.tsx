import React from "react";
import { Bell, X, Filter } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  platform: string;
  priority: "high" | "medium" | "low";
  read: boolean;
}

interface NotificationCenterProps {
  notifications?: Notification[];
  open?: boolean;
  onClose?: () => void;
}

const defaultNotifications: Notification[] = [
  {
    id: "1",
    title: "Budget Alert",
    message: "Project expenses exceeded monthly budget by 15%",
    timestamp: "10 minutes ago",
    platform: "Northspyre",
    priority: "high",
    read: false,
  },
  {
    id: "2",
    title: "Teams Meeting",
    message: "Contractor review meeting scheduled for tomorrow",
    timestamp: "30 minutes ago",
    platform: "Microsoft Teams",
    priority: "medium",
    read: false,
  },
  {
    id: "3",
    title: "Document Update",
    message: "Project specifications updated in ShareFile",
    timestamp: "1 hour ago",
    platform: "ShareFile",
    priority: "medium",
    read: false,
  },
  {
    id: "4",
    title: "List Item Updated",
    message: "Site inspection checklist modified",
    timestamp: "2 hours ago",
    platform: "Microsoft Lists",
    priority: "low",
    read: true,
  },
  {
    id: "5",
    title: "File Shared",
    message: "New architectural drawings shared via OneDrive",
    timestamp: "3 hours ago",
    platform: "OneDrive",
    priority: "medium",
    read: true,
  },
];

const getPriorityColor = (priority: Notification["priority"]) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
  }
};

const NotificationCenter = ({
  notifications = defaultNotifications,
  open = false,
  onClose = () => {},
}: NotificationCenterProps) => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Sheet defaultOpen={open}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[380px] md:w-[540px] bg-white">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>Notifications</SheetTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>
        <Separator className="my-4" />
        <ScrollArea className="h-[calc(100vh-120px)] pr-4">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border ${notification.read ? "bg-gray-50" : "bg-white"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <Avatar
                    className={`${getPriorityColor(notification.priority)} p-2`}
                  >
                    <Bell className="h-4 w-4" />
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-sm">
                        {notification.title}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {notification.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge
                        variant="outline"
                        className="text-xs flex items-center gap-1"
                      >
                        <Bell className="h-3 w-3" />
                        {notification.platform}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${getPriorityColor(notification.priority)}`}
                      >
                        {notification.priority}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationCenter;
