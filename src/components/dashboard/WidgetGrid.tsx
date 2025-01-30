import React from "react";
import { SourceBadge } from "@/components/ui/source-badge";
import ActivityFeed from "./widgets/ActivityFeed";
import ProjectTimeline from "./widgets/ProjectTimeline";
import TaskList from "./widgets/TaskList";
import FinancialSnapshot from "./widgets/FinancialSnapshot";

interface Widget {
  id: string;
  type: "activity" | "timeline" | "tasks" | "financial";
  source: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface WidgetGridProps {
  widgets?: Widget[];
}

const defaultWidgets: Widget[] = [
  {
    id: "1",
    type: "activity",
    source: "Microsoft Teams",
    x: 0,
    y: 0,
    w: 4,
    h: 4,
  },
  {
    id: "2",
    type: "tasks",
    source: "Procore",
    x: 4,
    y: 0,
    w: 4,
    h: 4,
  },
  {
    id: "3",
    type: "financial",
    source: "Northspyre",
    x: 8,
    y: 0,
    w: 4,
    h: 4,
  },
  {
    id: "4",
    type: "timeline",
    source: "Procore",
    x: 0,
    y: 4,
    w: 12,
    h: 4,
  },
];

const WidgetGrid = ({ widgets = defaultWidgets }: WidgetGridProps) => {
  const renderWidget = (widget: Widget) => {
    switch (widget.type) {
      case "activity":
        return <ActivityFeed />;
      case "timeline":
        return <ProjectTimeline />;
      case "tasks":
        return <TaskList />;
      case "financial":
        return <FinancialSnapshot />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 pt-1">
      {widgets.map((widget) => (
        <div
          key={widget.id}
          className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary/50"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                {widget.type.charAt(0).toUpperCase() + widget.type.slice(1)}
              </h3>
              <SourceBadge source={widget.source} />
            </div>
            {renderWidget(widget)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WidgetGrid;
