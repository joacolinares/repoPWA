"use client";

import { usePathname } from "next/navigation";
import Footer from "../generals/Footer";
import Header from "../generals/Header";
import HeaderPages from "../generals/HeaderPages";

interface Props {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: Props) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-between min-h-screen overflow-hidden">
      <div>
        {pathname === "/menu" ||
          pathname === "/members" ||
          pathname === "/transactions" ||
          pathname === "/notifications" ||
          pathname === "/governance" ? (
          <HeaderPages text={pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)} />
        ) : (
          <Header />
        )}

        {children}
      </div>
      
      <Footer />
    </div>
  );
}
