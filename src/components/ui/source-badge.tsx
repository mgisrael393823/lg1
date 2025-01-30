import React from "react";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Mail, FileText, Bell, Building2 } from "lucide-react";

type SourceType =
  | "teams"
  | "email"
  | "chat"
  | "sharefile"
  | "onedrive"
  | "microsoft lists"
  | "northspyre"
  | "procore"
  | "sage"
  | "office 365"
  | "hubspot";

interface SourceBadgeProps {
  source: string;
}

const getIconForSource = (source: string) => {
  switch (source.toLowerCase()) {
    case "teams":
    case "chat":
    case "microsoft teams":
      return <MessageSquare className="h-3 w-3" />;
    case "email":
      return <Mail className="h-3 w-3" />;
    case "sharefile":
    case "onedrive":
    case "office 365":
      return <FileText className="h-3 w-3" />;
    case "northspyre":
    case "procore":
    case "sage":
      return <Building2 className="h-3 w-3" />;
    default:
      return <Bell className="h-3 w-3" />;
  }
};

export function SourceBadge({ source }: SourceBadgeProps) {
  return (
    <Badge variant="outline" className="flex items-center gap-1">
      {getIconForSource(source)}
      {source}
    </Badge>
  );
}
