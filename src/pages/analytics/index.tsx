import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Clock, BarChart2, LineChart } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const projectData = [
  { name: "In Progress", value: 45 },
  { name: "Completed", value: 30 },
  { name: "Delayed", value: 15 },
  { name: "Not Started", value: 10 },
];

const budgetData = [
  { month: "Jan", planned: 400000, actual: 380000 },
  { month: "Feb", planned: 600000, actual: 620000 },
  { month: "Mar", planned: 800000, actual: 850000 },
  { month: "Apr", planned: 1000000, actual: 980000 },
  { month: "May", planned: 1200000, actual: 1250000 },
];

const performanceData = [
  { date: "Mon", tasks: 12 },
  { date: "Tue", tasks: 18 },
  { date: "Wed", tasks: 15 },
  { date: "Thu", tasks: 25 },
  { date: "Fri", tasks: 20 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Analytics() {
  return (
    <div className="p-4 max-w-[1512px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="flex gap-2 mb-6">
        <Button variant="secondary" className="rounded-lg">
          Overview
        </Button>
        <Button variant="ghost" className="text-gray-500">
          Financial
        </Button>
        <Button variant="ghost" className="text-gray-500">
          Projects
        </Button>
        <Button variant="ghost" className="text-gray-500">
          Team
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Project Status</h3>
            <Clock className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {projectData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Budget Overview</h3>
            <BarChart2 className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="planned" fill="#8884d8" />
                <Bar dataKey="actual" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Team Performance</h3>
            <LineChart className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="tasks"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
