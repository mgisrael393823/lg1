import React from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SourceBadge } from "@/components/ui/source-badge";
import { Bell, Calendar, FileText, MessageSquare } from "lucide-react";

interface ActivityItem {
  id: string;
  type: "notification" | "calendar" | "document" | "message";
  title: string;
  description: string;
  timestamp: string;
  platform: string;
  priority: "low" | "medium" | "high";
}

interface ActivityFeedProps {
  activities?: ActivityItem[];
}

const defaultActivities: ActivityItem[] = [
  {
    id: "1",
    type: "notification",
    title: "Teams Chat",
    description: "New messages in Project Discussion channel",
    timestamp: "1 hour ago",
    platform: "Microsoft Teams",
    priority: "high",
  },
  {
    id: "2",
    type: "document",
    title: "Document Update",
    description: "Budget spreadsheet modified in Office 365",
    timestamp: "2 hours ago",
    platform: "Office 365",
    priority: "medium",
  },
  {
    id: "3",
    type: "document",
    title: "File Shared",
    description: "Site photos uploaded to ShareFile",
    timestamp: "3 hours ago",
    platform: "ShareFile",
    priority: "low",
  },
  {
    id: "4",
    type: "calendar",
    title: "List Updated",
    description: "Equipment inventory list modified",
    timestamp: "4 hours ago",
    platform: "Microsoft Lists",
    priority: "medium",
  },
  {
    id: "5",
    type: "document",
    title: "Files Synced",
    description: "Project documents synced to OneDrive",
    timestamp: "5 hours ago",
    platform: "OneDrive",
    priority: "low",
  },
];

const getIconForType = (type: ActivityItem["type"]) => {
  switch (type) {
    case "notification":
      return <Bell className="h-4 w-4" />;
    case "calendar":
      return <Calendar className="h-4 w-4" />;
    case "document":
      return <FileText className="h-4 w-4" />;
    case "message":
      return <MessageSquare className="h-4 w-4" />;
  }
};

const getPriorityColor = (priority: ActivityItem["priority"]) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
  }
};

const ActivityFeed = ({
  activities = defaultActivities,
}: ActivityFeedProps) => {
  return (
    <Card className="w-full bg-white p-3 h-[300px]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Activity Feed
        </h2>
        <Badge variant="secondary">{activities.length} Updates</Badge>
      </div>

      <ScrollArea className="h-[calc(100%-4rem)] pr-2 sm:pr-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Avatar className={`${getPriorityColor(activity.priority)} p-2`}>
                {getIconForType(activity.type)}
              </Avatar>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{activity.title}</p>
                  <span className="text-sm text-gray-500">
                    {activity.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <Badge variant="outline" className="text-xs">
                  {activity.platform}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ActivityFeed;
