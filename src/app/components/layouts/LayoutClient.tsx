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

  const headerText = pathname.includes("/")
    ? pathname
        .split("/")
        .filter(path => path.length > 0 && path !== "/")
        [0]
        .charAt(0)
        .toUpperCase() + pathname
        .split("/")
        .filter(path => path.length > 0 && path !== "/")
        [0]
        .slice(1)
    : pathname.charAt(0).toUpperCase() + pathname.slice(1);

  const handlePathname = () => {
    if (
      pathname === "/menu" ||
      pathname === "/transactions" ||
      pathname === "/notifications" ||
      pathname === "/governance"
    ) {
      return (
        <HeaderPages
          text={pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
        />
      );
    } else if (pathname === "/profile/edit") {
      return (
        <HeaderPages
        text={headerText}
      />
      );
    }else if (pathname === "/members/selectMember") {
      return (
        null
      );
    }  else {
      return <Header text={pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}/>;
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen overflow-hidden">
      <div>
        {handlePathname()}
        {children}
      </div>

      <Footer />
    </div>
  );
}
