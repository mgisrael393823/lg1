import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

interface KPIMetric {
  id: string;
  label: string;
  value: string;
  change: number;
  trend: "up" | "down" | "neutral";
  status: "success" | "warning" | "danger";
}

interface KPISectionProps {
  metrics?: KPIMetric[];
}

const defaultMetrics: KPIMetric[] = [
  {
    id: "1",
    label: "Total Budget",
    value: "$2.4M",
    change: 12.5,
    trend: "up",
    status: "success",
  },
  {
    id: "2",
    label: "Expenses MTD",
    value: "$345K",
    change: -2.3,
    trend: "down",
    status: "warning",
  },
  {
    id: "3",
    label: "Project ROI",
    value: "18.2%",
    change: 5.1,
    trend: "up",
    status: "success",
  },
  {
    id: "4",
    label: "Cost Variance",
    value: "-$50K",
    change: -8.4,
    trend: "down",
    status: "danger",
  },
];

const KPISection = ({ metrics = defaultMetrics }: KPISectionProps) => {
  const getStatusColor = (status: KPIMetric["status"]) => {
    switch (status) {
      case "success":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "danger":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getTrendIcon = (trend: KPIMetric["trend"]) => {
    switch (trend) {
      case "up":
        return <ArrowUpRight className="h-4 w-4 text-green-600" />;
      case "down":
        return <ArrowDownRight className="h-4 w-4 text-red-600" />;
      default:
        return <TrendingUp className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="p-4 lg:p-6 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-primary/50"
        >
          <div className="flex justify-between items-start mb-2">
            <span
              className="text-base font-medium text-gray-700"
              role="heading"
              aria-level={3}
            >
              {metric.label}
            </span>
            {metric.status === "danger" && (
              <AlertCircle className="h-4 w-4 text-red-500" />
            )}
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold tracking-tight">
              {metric.value}
            </span>
            <div className="flex items-center space-x-1">
              {getTrendIcon(metric.trend)}
              <span
                className={`text-base font-medium ${getStatusColor(metric.status)}`}
                role="status"
                aria-live="polite"
              >
                {metric.change > 0 ? "+" : ""}
                {metric.change}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPISection;
