"use client";
import React from "react";
import { usePathname } from "next/navigation";
import HeaderPages from "@/app/components/generals/HeaderPages";

const LevelMembers = () => {
  const pathname = usePathname();

  const headerText = pathname.includes("/")
    ? pathname
        .split("/")
        .filter((path) => path.length > 0 && path !== "/")[0]
        .charAt(0)
        .toUpperCase() +
      pathname
        .split("/")
        .filter((path) => path.length > 0 && path !== "/")[0]
        .slice(1)
    : pathname.charAt(0).toUpperCase() + pathname.slice(1);

  return (
    <div>
      <HeaderPages text={headerText} />
    </div>
  );
};

export default LevelMembers;
