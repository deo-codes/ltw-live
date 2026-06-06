import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface SiteShellProps {
  children: ReactNode;
}

export default function SiteShell({
  children,
}: SiteShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-1 pt-[66px] xl:pt-[114px]">
        {children}
      </main>

      <Footer />
    </div>
  );
}