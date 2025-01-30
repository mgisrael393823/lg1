import React from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Circle, AlertCircle, CalendarDays } from "lucide-react";

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  status: "completed" | "in-progress" | "upcoming" | "delayed";
  description: string;
}

interface ProjectTimelineProps {
  events?: TimelineEvent[];
  title?: string;
}

const defaultEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Project Kickoff",
    date: "2024-01-15",
    status: "completed",
    description: "Initial project planning and team alignment",
  },
  {
    id: "2",
    title: "Design Phase",
    date: "2024-02-01",
    status: "in-progress",
    description: "Architecture and design specifications",
  },
  {
    id: "3",
    title: "Construction Start",
    date: "2024-03-15",
    status: "upcoming",
    description: "Beginning of construction phase",
  },
  {
    id: "4",
    title: "Permit Approval",
    date: "2024-02-28",
    status: "delayed",
    description: "Awaiting municipal approval",
  },
];

const statusColors = {
  completed: "bg-green-500",
  "in-progress": "bg-blue-500",
  upcoming: "bg-gray-500",
  delayed: "bg-red-500",
};

const statusTextColors = {
  completed: "text-green-700",
  "in-progress": "text-blue-700",
  upcoming: "text-gray-700",
  delayed: "text-red-700",
};

const statusBgColors = {
  completed: "bg-green-50",
  "in-progress": "bg-blue-50",
  upcoming: "bg-gray-50",
  delayed: "bg-red-50",
};

const ProjectTimeline = ({
  events = defaultEvents,
  title = "Project Timeline",
}: ProjectTimelineProps) => {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <Card className="w-full bg-white p-3 h-[300px]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
      </div>

      <ScrollArea className="h-[calc(100%-4rem)] pr-2 sm:pr-4">
        <div className="space-y-3">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className={`p-3 rounded-lg border ${statusBgColors[event.status]} hover:bg-opacity-75 transition-colors`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Circle
                      className={`h-2 w-2 ${statusColors[event.status]}`}
                    />
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    {event.status === "delayed" && (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ProjectTimeline;
