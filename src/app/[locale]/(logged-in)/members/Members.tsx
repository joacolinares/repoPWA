"use client";
import React from "react";
import CurrentPlan from "./components/CurrentPlan";
import { usePathname } from "next/navigation";
import SelectMember from "./selectMember/page";
import MyMembersTeam from "./components/MyMembersTeam";
import Header from "@/app/components/generals/Header";

const Members = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/members/selectMember" ? (
        <SelectMember />
      ) : (
        <div className="pb-[32px]">
          <Header
            text={pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
          />
          <CurrentPlan />
          <MyMembersTeam />
        </div>
      )}
    </>
  );
};

export default Members;
