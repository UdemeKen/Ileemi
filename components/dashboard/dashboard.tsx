import React from "react";
import DashboardDesktop from "./dashboard-desktop";
import { FirstDashboardCardItems, SecondDashboardCardItems } from "@/types";
import { FileInput, Globe, ShoppingCart, Wallet } from "lucide-react";

const firstDashboardCardItems: FirstDashboardCardItems = {
  links: [
    {
      title: "Today's Money",
      amount: "$53,000.00",
      icon: Wallet,
    },
    {
      title: "Today's Users",
      amount: "2,300.00",
      icon: Globe,
    },
    {
      title: "New Clients",
      amount: "+3,052.00",
      icon: FileInput,
    },
    {
      title: "Total Sales",
      amount: "$173,000.00",
      icon: ShoppingCart,
    },
  ],
};

const secondDashBoardCardItems: SecondDashboardCardItems = {
  links: [
    {
      image: "/airtime.png",
      name: "Airtime",
    },
    {
      image: "/mobileData.png",
      name: "Mobile Data Service",
    },
    {
      image: "/cableBillPayment.png",
      name: "Cable Bill Payment",
    },
    {
      image: "/internetService.png",
      name: "Internet Service",
    },
    {
      image: "/utilityBills.png",
      name: "Utility Bills",
    },
    {
      image: "/taxPayment.png",
      name: "Tax Payment",
    },
    {
      image: "/donations.png",
      name: "Donations",
    },
    {
      image: "/transport&logistics.png",
      name: "Transport and Logistics",
    },
    {
      image: "/more.png",
      name: "More",
    },
  ],
};

export default function Dasboard() {
  return (
    <DashboardDesktop
      FirstDashboardCardItem={firstDashboardCardItems}
      SecondDashBoardCardItem={secondDashBoardCardItems}
    />
  );
}
