import React from "react";
import { Badge } from "@/components/ui/badge";
import { getAppColors } from "@/lib/app-colors";
import type { AppName } from "@/lib/app-colors";

interface SourceBadgeProps {
  source: AppName;
  className?: string;
}

export const SourceBadge = ({ source, className = "" }: SourceBadgeProps) => {
  const { background, text } = getAppColors(source);

  return (
    <Badge variant="secondary" className={`${background} ${text} ${className}`}>
      {source}
    </Badge>
  );
};
