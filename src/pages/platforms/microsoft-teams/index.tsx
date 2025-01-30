import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, MessageSquare, Video, Users, Pin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";

interface Message {
  id: string;
  channel: string;
  sender: string;
  avatar: string;
  content: string;
  timestamp: string;
  mentions?: string[];
  attachments?: number;
  isPinned?: boolean;
}

const messages: Message[] = [
  {
    id: "1",
    channel: "Project Updates",
    sender: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "Updated the construction timeline for Phase 2",
    timestamp: "10:30 AM",
    mentions: ["@team"],
    isPinned: true,
  },
  {
    id: "2",
    channel: "Budget Discussion",
    sender: "Mike Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    content: "Scheduled budget review meeting for tomorrow",
    timestamp: "11:45 AM",
    attachments: 2,
  },
];

export default function MicrosoftTeams() {
  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-[1512px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://img.icons8.com/color/48/000000/microsoft-teams.png"
            alt="Teams"
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold">Microsoft Teams</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Users className="h-4 w-4 mr-2" />
            New Channel
          </Button>
          <Button>
            <Video className="h-4 w-4 mr-2" />
            Start Meeting
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Card className="p-4">
            <div className="font-medium mb-2">Channels</div>
            <div className="space-y-1">
              {[
                "General",
                "Project Updates",
                "Budget Discussion",
                "Site Photos",
              ].map((channel) => (
                <Button
                  key={channel}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  # {channel}
                </Button>
              ))}
            </div>
          </Card>
        </div>

        <div className="col-span-9">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold"># Project Updates</h2>
              <Button variant="ghost" size="sm">
                <Pin className="h-4 w-4" />
              </Button>
            </div>
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="flex gap-4 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <Avatar className="h-10 w-10">
                      <img src={message.avatar} alt={message.sender} />
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{message.sender}</span>
                        <span className="text-sm text-gray-500">
                          {message.timestamp}
                        </span>
                        {message.isPinned && (
                          <Badge variant="outline" className="text-xs">
                            Pinned
                          </Badge>
                        )}
                      </div>
                      <p className="mt-1">{message.content}</p>
                      {message.mentions && (
                        <div className="mt-1">
                          {message.mentions.map((mention) => (
                            <Badge
                              key={mention}
                              variant="secondary"
                              className="mr-1"
                            >
                              {mention}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-4">
              <Input placeholder="Type a message..." />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
