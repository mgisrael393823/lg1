import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  BarChart,
  PieChart,
  TrendingUp,
  Download,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Analytics() {
  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-[1512px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Project Status</h3>
                <PieChart className="h-5 w-5 text-gray-500" />
              </div>
              {/* Add chart component here */}
              <div className="h-48 bg-gray-100 rounded-lg" />
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Budget Overview</h3>
                <BarChart className="h-5 w-5 text-gray-500" />
              </div>
              {/* Add chart component here */}
              <div className="h-48 bg-gray-100 rounded-lg" />
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Team Performance</h3>
                <LineChart className="h-5 w-5 text-gray-500" />
              </div>
              {/* Add chart component here */}
              <div className="h-48 bg-gray-100 rounded-lg" />
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
