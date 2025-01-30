import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Plus, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SourceBadge } from "@/components/ui/source-badge";
import type { AppName } from "@/lib/app-colors";

interface Integration {
  id: string;
  name: AppName;
  description: string;
  status: "connected" | "disconnected" | "error";
  lastSync: string;
}

const integrations: Integration[] = [
  {
    id: "1",
    name: "Northspyre",
    description: "Project cost management and analytics platform",
    status: "connected",
    lastSync: "5 minutes ago",
  },
  {
    id: "2",
    name: "Procore",
    description: "Construction project management software",
    status: "error",
    lastSync: "1 hour ago",
  },
  {
    id: "3",
    name: "Sage",
    description: "Financial management and accounting software",
    status: "disconnected",
    lastSync: "Never",
  },
  {
    id: "4",
    name: "Microsoft Teams",
    description: "Team collaboration and communication platform",
    status: "connected",
    lastSync: "2 minutes ago",
  },
  {
    id: "5",
    name: "ShareFile",
    description: "Secure file sharing and storage solution",
    status: "connected",
    lastSync: "15 minutes ago",
  },
];

const getStatusBadge = (status: Integration["status"]) => {
  switch (status) {
    case "connected":
      return <Badge className="bg-green-100 text-green-800">Connected</Badge>;
    case "disconnected":
      return <Badge className="bg-gray-100 text-gray-800">Disconnected</Badge>;
    case "error":
      return <Badge className="bg-red-100 text-red-800">Error</Badge>;
  }
};

export default function Integrations() {
  return (
    <div className="p-4 max-w-[1512px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Integrations</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Integration
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input placeholder="Search integrations..." className="pl-10" />
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {integrations.map((integration) => (
            <Card key={integration.id} className="p-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-lg font-semibold">
                        {integration.name}
                      </h2>
                      <SourceBadge source={integration.name} />
                    </div>
                    <p className="text-sm text-gray-600">
                      {integration.description}
                    </p>
                  </div>
                  <Switch checked={integration.status === "connected"} />
                </div>
                <div className="flex items-center gap-3">
                  {getStatusBadge(integration.status)}
                  <span className="text-sm text-gray-500">
                    Last sync: {integration.lastSync}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto"
                    disabled={integration.status === "disconnected"}
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Sync Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
