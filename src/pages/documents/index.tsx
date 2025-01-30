import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  Upload,
  FileText,
  Folder,
  MoreVertical,
} from "lucide-react";

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  modified: string;
  owner: string;
}

const documents: Document[] = [
  {
    id: "1",
    name: "Project Requirements.pdf",
    type: "PDF",
    size: "2.4 MB",
    modified: "2 hours ago",
    owner: "Sarah Johnson",
  },
  {
    id: "2",
    name: "Budget Estimates.xlsx",
    type: "Excel",
    size: "1.8 MB",
    modified: "Yesterday",
    owner: "Mike Chen",
  },
  {
    id: "3",
    name: "Site Photos.zip",
    type: "ZIP",
    size: "45.2 MB",
    modified: "3 days ago",
    owner: "David Wilson",
  },
];

export default function Documents() {
  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-[1512px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Documents</h1>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search documents..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {documents.map((doc) => (
            <Card key={doc.id} className="p-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <FileText className="h-6 w-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{doc.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>Modified {doc.modified}</span>
                    <span>•</span>
                    <span>{doc.owner}</span>
                  </div>
                </div>
                <Badge variant="outline">{doc.type}</Badge>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
