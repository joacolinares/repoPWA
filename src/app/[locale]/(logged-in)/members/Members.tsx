"use client";
import React from "react";
import CurrentPlan from "./components/CurrentPlan";
import { usePathname } from "next/navigation";
import SelectMember from "./selectMember/page";
import MyMembersTeam from "./components/MyMembersTeam";
import Header from "@/app/components/generals/Header";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import {  BinanceTestnet } from "@thirdweb-dev/chains";
const Members = () => {
  const pathname = usePathname();
  return (
    <ThirdwebProvider
    // activeChain={BinanceTestnet}
    activeChain={BinanceTestnet}
    clientId="95347962d3e713129610a9c9f4dbce58"
  >
    <div>
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
    </div>
    </ThirdwebProvider>
  );
};

export default Members;
