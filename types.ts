import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface SidebarItems {
  links: Array<{
    label: string;
    href: string;
    icon: LucideIcon;
  }>;

  extras?: ReactNode;
}

export interface FirstDashboardCardItems {
  links: Array<{
    title: string;
    amount: string;
    icon: LucideIcon;
  }>;
}

export interface SecondDashboardCardItems {
  links: Array<{
    image: string;
    name: string;
    href: string;
  }>;
}
