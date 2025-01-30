import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Plus, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Integration {
  id: string;
  name: string;
  description: string;
  status: "connected" | "disconnected" | "error";
  lastSync: string;
  icon: string;
}

const integrations: Integration[] = [
  {
    id: "1",
    name: "Northspyre",
    description: "Project cost management and analytics platform",
    status: "connected",
    lastSync: "5 minutes ago",
    icon: "https://lg-group.com/wp-content/uploads/2021/12/LG-Design-Logo_Black-e1640047593286-300x157.png",
  },
  {
    id: "2",
    name: "Procore",
    description: "Construction project management software",
    status: "error",
    lastSync: "1 hour ago",
    icon: "https://lg-group.com/wp-content/uploads/2021/12/LG-Design-Logo_Black-e1640047593286-300x157.png",
  },
  {
    id: "3",
    name: "Sage",
    description: "Financial management and accounting software",
    status: "disconnected",
    lastSync: "Never",
    icon: "https://lg-group.com/wp-content/uploads/2021/12/LG-Design-Logo_Black-e1640047593286-300x157.png",
  },
];

const getStatusColor = (status: Integration["status"]) => {
  switch (status) {
    case "connected":
      return "bg-green-100 text-green-800";
    case "disconnected":
      return "bg-gray-100 text-gray-800";
    case "error":
      return "bg-red-100 text-red-800";
  }
};

export default function Integrations() {
  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-[1512px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Integrations</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Integration
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search integrations..." className="pl-10" />
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="grid gap-4">
          {integrations.map((integration) => (
            <Card key={integration.id} className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src={integration.icon}
                  alt={integration.name}
                  className="w-12 h-12 rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">
                        {integration.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {integration.description}
                      </p>
                    </div>
                    <Switch
                      checked={integration.status === "connected"}
                      className="ml-4"
                    />
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <Badge className={getStatusColor(integration.status)}>
                      {integration.status.charAt(0).toUpperCase() +
                        integration.status.slice(1)}
                    </Badge>
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
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
