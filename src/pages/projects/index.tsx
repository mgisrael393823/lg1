import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus } from "lucide-react";

interface Project {
  id: string;
  name: string;
  status: "active" | "completed" | "on-hold" | "delayed";
  progress: number;
  budget: number;
  location: string;
  manager: string;
}

const defaultProjects: Project[] = [
  {
    id: "1",
    name: "Downtown Office Complex",
    status: "active",
    progress: 65,
    budget: 2500000,
    location: "New York, NY",
    manager: "Sarah Johnson",
  },
  {
    id: "2",
    name: "Retail Center Renovation",
    status: "delayed",
    progress: 30,
    budget: 1800000,
    location: "Los Angeles, CA",
    manager: "Mike Chen",
  },
  {
    id: "3",
    name: "Mixed-Use Development",
    status: "on-hold",
    progress: 45,
    budget: 5200000,
    location: "Chicago, IL",
    manager: "David Wilson",
  },
];

const getStatusColor = (status: Project["status"]) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800";
    case "completed":
      return "bg-blue-100 text-blue-800";
    case "on-hold":
      return "bg-yellow-100 text-yellow-800";
    case "delayed":
      return "bg-red-100 text-red-800";
  }
};

export default function Projects() {
  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-[1512px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search projects..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="grid gap-4">
          {defaultProjects.map((project) => (
            <Card key={project.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>Manager: {project.manager}</span>
                  </div>
                </div>
                <Badge className={getStatusColor(project.status)}>
                  {project.status.charAt(0).toUpperCase() +
                    project.status.slice(1)}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} />

                <div className="flex justify-between text-sm mt-4">
                  <span>Budget</span>
                  <span className="font-medium">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(project.budget)}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
