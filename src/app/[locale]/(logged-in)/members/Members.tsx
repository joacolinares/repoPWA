"use client";
import React from "react";
import CurrentPlan from "./components/CurrentPlan";
import { usePathname } from "next/navigation";
import SelectMember from "./selectMember/page";
import { PlansMembership } from "../../membership/moskData";

const Members = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/members/selectMember" ? (
        <SelectMember />
      ) : (
        <div className="px-[24px] py-[32px]">
          <CurrentPlan />
        </div>
      )}
    </>
  );
};

export default Members;
