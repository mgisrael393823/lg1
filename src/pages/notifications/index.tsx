import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Search, Bell, Filter } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  platform: string;
  priority: "high" | "medium" | "low";
  read: boolean;
}

const notifications: Notification[] = [
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

export default function Notifications() {
  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-[1512px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button variant="outline">
          <Bell className="h-4 w-4 mr-2" />
          Mark All as Read
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search notifications..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`p-4 ${notification.read ? "bg-gray-50" : "bg-white"}`}
            >
              <div className="flex items-start gap-4">
                <Avatar
                  className={`${getPriorityColor(notification.priority)} p-2`}
                >
                  <Bell className="h-4 w-4" />
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{notification.title}</h3>
                    <span className="text-sm text-gray-500">
                      {notification.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {notification.message}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
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
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
