import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface SiteShellProps {
  children: ReactNode;
  transparentHeader?: boolean;
}

export default function SiteShell({
  children,
  transparentHeader = false,
}: SiteShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header transparent={transparentHeader} />

      <main
        className={`flex-1 ${
          transparentHeader ? "pt-0" : "pt-[66px] xl:pt-[114px]"
        }`}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}