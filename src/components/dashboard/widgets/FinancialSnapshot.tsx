import React from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface FinancialMetric {
  id: string;
  label: string;
  actual: number;
  budget: number;
  variance: number;
  trend: "up" | "down" | "neutral";
}

interface FinancialSnapshotProps {
  metrics?: FinancialMetric[];
}

const defaultMetrics: FinancialMetric[] = [
  {
    id: "1",
    label: "Construction Costs",
    actual: 1250000,
    budget: 1500000,
    variance: -250000,
    trend: "up",
  },
  {
    id: "2",
    label: "Soft Costs",
    actual: 450000,
    budget: 400000,
    variance: 50000,
    trend: "up",
  },
  {
    id: "3",
    label: "FF&E",
    actual: 200000,
    budget: 250000,
    variance: -50000,
    trend: "down",
  },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const FinancialSnapshot = ({
  metrics = defaultMetrics,
}: FinancialSnapshotProps) => {
  return (
    <Card className="w-full bg-white p-3 h-[300px]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Financial Snapshot
        </h2>
        <Badge variant="outline" className="flex items-center gap-1">
          <DollarSign className="h-4 w-4" />
          Budget vs. Actual
        </Badge>
      </div>

      <ScrollArea className="h-[calc(100%-4rem)] pr-2 sm:pr-4">
        <div className="space-y-6">
          {metrics.map((metric) => {
            const percentage = (metric.actual / metric.budget) * 100;
            const isOverBudget = metric.actual > metric.budget;

            return (
              <div key={metric.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-gray-700">
                    {metric.label}
                  </span>
                  <div className="flex items-center gap-2">
                    {isOverBudget && (
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-base text-gray-700 font-medium">
                      {formatCurrency(metric.actual)} /{" "}
                      {formatCurrency(metric.budget)}
                    </span>
                  </div>
                </div>

                <Progress
                  value={percentage}
                  className={isOverBudget ? "bg-red-100" : "bg-green-100"}
                />

                <div className="flex items-center justify-between text-sm">
                  <span
                    className={`${isOverBudget ? "text-red-600" : "text-green-600"}`}
                  >
                    Variance: {formatCurrency(metric.variance)}
                  </span>
                  <div className="flex items-center gap-1">
                    <TrendingUp
                      className={`h-4 w-4 ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}
                    />
                    <span>{percentage.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default FinancialSnapshot;
