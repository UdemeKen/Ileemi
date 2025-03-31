'use client'

import AirtimeCategoryy from "@/components/airtimeCategory/airtime-category";
import Dasboard from "@/components/dashboard/dashboard";
import ElectricityCategory from "@/components/electricityCategory/electricity-category";
import Sidebar from "@/components/sideBar/sidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname();
    return (
      <section>
        <Sidebar />
        <main className="mx-5 mt-16 sm:ml-[250px] sm:mt-5 relative">
        {children}
        {pathname === '/page/dashboard' && <Dasboard />}
        {pathname === '/page/airtime' && <AirtimeCategoryy />}
        {pathname === '/page/electricity' && <ElectricityCategory />}
        {pathname === '/page/electricity-order-summary' && <ElectricityCategory />}
        </main>
      </section>
    );
  }