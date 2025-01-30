import React from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { SourceBadge } from "@/components/ui/source-badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Calendar, AlertCircle } from "lucide-react";

interface Task {
  id: string;
  title: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
  platform: string;
}

interface TaskListProps {
  tasks?: Task[];
  title?: string;
}

const defaultTasks: Task[] = [
  {
    id: "1",
    title: "Review project budget estimates",
    dueDate: "2024-03-25",
    priority: "high",
    completed: false,
    platform: "Northspyre",
  },
  {
    id: "2",
    title: "Schedule contractor meeting",
    dueDate: "2024-03-26",
    priority: "medium",
    completed: true,
    platform: "Procore",
  },
  {
    id: "3",
    title: "Update financial reports",
    dueDate: "2024-03-27",
    priority: "high",
    completed: false,
    platform: "Sage",
  },
];

const TaskList = ({
  tasks = defaultTasks,
  title = "Task List",
}: TaskListProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full bg-white p-3 shadow-sm h-[300px]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <Badge variant="outline" className="flex items-center gap-1">
          <AlertCircle className="h-4 w-4" />
          {tasks.filter((task) => !task.completed).length} pending
        </Badge>
      </div>

      <ScrollArea className="h-[calc(100%-4rem)] pr-2 sm:pr-4">
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-start space-x-3 p-3 rounded-lg border ${task.completed ? "bg-gray-50" : "bg-white"}`}
            >
              <Checkbox checked={task.completed} className="mt-1" />
              <div className="flex-1">
                <p
                  className={`text-sm font-medium ${task.completed ? "text-gray-500 line-through" : "text-gray-900"}`}
                >
                  {task.title}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {task.dueDate}
                  </div>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${getPriorityColor(task.priority)}`}
                  >
                    {task.priority}
                  </Badge>
                  <SourceBadge source={task.platform} className="text-xs" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default TaskList;
