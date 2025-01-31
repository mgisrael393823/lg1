import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  Upload,
  FileText,
  Folder,
  Grid,
  List,
  MoreVertical,
  Users,
  Clock,
  Star,
} from "lucide-react";

interface File {
  id: string;
  name: string;
  type: "folder" | "pdf" | "doc" | "image";
  size?: string;
  modified: string;
  sharedWith?: string[];
}

const files: File[] = [
  {
    id: "1",
    name: "Project Documents",
    type: "folder",
    modified: "2 hours ago",
    sharedWith: ["Team A", "Contractors"],
  },
  {
    id: "2",
    name: "Site Survey Report.pdf",
    type: "pdf",
    size: "2.4 MB",
    modified: "Yesterday",
    sharedWith: ["Project Managers"],
  },
  {
    id: "3",
    name: "Budget Estimates.doc",
    type: "doc",
    size: "1.8 MB",
    modified: "3 days ago",
    sharedWith: ["Finance Team"],
  },
];

export default function ShareFile() {
  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-[1512px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://img.icons8.com/color/48/000000/sharefile.png"
            alt="ShareFile"
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold">ShareFile</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Folder className="h-4 w-4 mr-2" />
            New Folder
          </Button>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload Files
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Card className="p-4">
            <div className="space-y-1">
              {[
                { label: "All Files", icon: FileText },
                { label: "Shared with Me", icon: Users },
                { label: "Recent", icon: Clock },
                { label: "Starred", icon: Star },
              ].map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
          </Card>
        </div>

        <div className="col-span-9">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search files..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Grid className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <ScrollArea className="h-[calc(100vh-16rem)]">
              <div className="space-y-2">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50"
                  >
                    {file.type === "folder" ? (
                      <Folder className="h-10 w-10 text-blue-500" />
                    ) : (
                      <FileText className="h-10 w-10 text-gray-500" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{file.name}</span>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        {file.size && <span>{file.size}</span>}
                        <span>•</span>
                        <span>Modified {file.modified}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
