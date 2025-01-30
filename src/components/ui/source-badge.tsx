import { Badge } from "./badge";
import { getAppColors } from "@/lib/app-colors";
import type { AppName } from "@/lib/app-colors";

interface SourceBadgeProps {
  source: AppName;
  className?: string;
}

export function SourceBadge({ source, className = "" }: SourceBadgeProps) {
  const colors = getAppColors(source);

  return (
    <Badge
      variant="secondary"
      className={`${colors.background} ${colors.text} ${className}`}
    >
      {source}
    </Badge>
  );
}
