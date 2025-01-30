export type AppName =
  | "Northspyre"
  | "Procore"
  | "Sage"
  | "Microsoft Teams"
  | "ShareFile"
  | "Office 365"
  | "OneDrive"
  | "Microsoft Lists"
  | "HubSpot";

type AppColor = {
  background: string;
  text: string;
};

export const appColors: Record<AppName, AppColor> = {
  Northspyre: {
    background: "bg-purple-100",
    text: "text-purple-800",
  },
  Procore: {
    background: "bg-blue-100",
    text: "text-blue-800",
  },
  Sage: {
    background: "bg-green-100",
    text: "text-green-800",
  },
  "Microsoft Teams": {
    background: "bg-indigo-100",
    text: "text-indigo-800",
  },
  ShareFile: {
    background: "bg-cyan-100",
    text: "text-cyan-800",
  },
  "Office 365": {
    background: "bg-orange-100",
    text: "text-orange-800",
  },
  OneDrive: {
    background: "bg-sky-100",
    text: "text-sky-800",
  },
  "Microsoft Lists": {
    background: "bg-teal-100",
    text: "text-teal-800",
  },
  HubSpot: {
    background: "bg-red-100",
    text: "text-red-800",
  },
};

export const getAppColors = (appName: AppName): AppColor => {
  return (
    appColors[appName] || { background: "bg-gray-100", text: "text-gray-800" }
  );
};
