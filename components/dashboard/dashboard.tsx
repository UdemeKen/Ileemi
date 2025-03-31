import React, { useEffect, useState } from "react";
import DashboardDesktop from "./dashboard-desktop";
import { FirstDashboardCardItems, SecondDashboardCardItems } from "@/types";
import { FileInput, Globe, ShoppingCart, Wallet } from "lucide-react";

const secondDashBoardCardItems: SecondDashboardCardItems = {
  links: [
    {
      image: "/airtime.png",
      name: "Airtime",
      href: "/page/airtime",
      
    },
    {
      image: "/mobileData.png",
      name: "Mobile Data Service",
      href: "",
    },
    {
      image: "/cableBillPayment.png",
      name: "Cable Bill Payment",
      href: "",
    },
    {
      image: "/internetService.png",
      name: "Internet Service",
      href: "",
    },
    {
      image: "/utilityBills.png",
      name: "Electricity Bills",
      href: "/page/electricity",
    },
    {
      image: "/taxPayment.png",
      name: "Tax Payment",
      href: "",
    },
    {
      image: "/donations.png",
      name: "Donations",
      href: "",
    },
    {
      image: "/transport&logistics.png",
      name: "Transport and Logistics",
      href: "",
    },
    {
      image: "/more.png",
      name: "More",
      href: "",
    },
  ],
};

export default function Dashboard() {
  const [walletAmount, setWalletAmount] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      const currencySymbol = localStorage.getItem("currency_symbol");
      const wallet = localStorage.getItem("wallet");
      if (currencySymbol && wallet) {
        setWalletAmount(`${currencySymbol}${wallet}`);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const firstDashboardCardItems: FirstDashboardCardItems = {
    links: [
      {
        title: "Wallet",
        amount: walletAmount,
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

  return (
    <DashboardDesktop
      FirstDashboardCardItem={firstDashboardCardItems}
      SecondDashBoardCardItem={secondDashBoardCardItems}
    />
  );
}
