import { Inter } from "next/font/google";
import Sidebar from "@/components/sideBar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section>
        <Sidebar />
        <main className="mx-5 mt-16 sm:ml-[250px] sm:mt-5">
            {children}
        </main>
      </section>
    );
  }