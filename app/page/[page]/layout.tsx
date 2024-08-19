'use client'

import Dasboard from "@/components/dashboard/dashboard";
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
        </main>
      </section>
    );
  }