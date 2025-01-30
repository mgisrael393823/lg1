import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SourceBadge } from "@/components/ui/source-badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Search, MessageSquare, Mail, Video } from "lucide-react";

interface Message {
  id: string;
  sender: string;
  avatar: string;
  subject: string;
  preview: string;
  timestamp: string;
  platform: "email" | "teams" | "chat";
  unread: boolean;
}

const messages: Message[] = [
  {
    id: "1",
    sender: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    subject: "Project Update: Downtown Office Complex",
    preview: "Here are the latest updates on the construction progress...",
    timestamp: "10:30 AM",
    platform: "email",
    unread: true,
  },
  {
    id: "2",
    sender: "Mike Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    subject: "Team Meeting Notes",
    preview: "Summary of our discussion regarding the timeline...",
    timestamp: "Yesterday",
    platform: "teams",
    unread: false,
  },
  {
    id: "3",
    sender: "David Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    subject: "Budget Review Request",
    preview: "Please review the attached budget estimates...",
    timestamp: "2 days ago",
    platform: "chat",
    unread: true,
  },
];

const platformIcons = {
  email: Mail,
  teams: MessageSquare,
  chat: MessageSquare,
};

export default function Communications() {
  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-[1512px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Communications</h1>
        <Button>
          <Video className="h-4 w-4 mr-2" />
          New Meeting
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search messages..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="chat">Chat</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="space-y-4">
              {messages.map((message) => {
                const Icon = platformIcons[message.platform];
                return (
                  <Card
                    key={message.id}
                    className={`p-4 ${message.unread ? "bg-blue-50" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <img src={message.avatar} alt={message.sender} />
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">{message.sender}</h3>
                            <p className="text-sm text-gray-600">
                              {message.subject}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className="flex items-center gap-1"
                            >
                              <Icon className="h-3 w-3" />
                              {message.platform}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {message.timestamp}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          {message.preview}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
