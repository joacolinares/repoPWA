"use client";
import React from "react";
import Navbar from "./Navbar";
import { usePathname, useRouter } from "next/navigation";
import DataStakesClaims from "@/app/[locale]/(logged-in)/dashboard/components/DataStakesClaims";
import ProfileHeader from "@/app/[locale]/(logged-in)/profile/edit/components/ProfileHeader";
import MembersHeader from "@/app/[locale]/(logged-in)/members/components/MembersHeader";
import RewardHeader from "@/app/[locale]/(logged-in)/rewardPool/components/RewardHeader";
import ButtonPrimary from "./ButtonPrimary";
import { useTranslations } from "next-intl";
import HeaderOperations from "@/app/[locale]/(logged-in)/operations/components/HeaderOperations";
import HeaderLiquidity from "@/app/[locale]/(logged-in)/liquidityPool/components/HeaderLiquidity";

type HeaderPagesProps = {
  text: string;
  isUnStake?: boolean;
  setIsUnStake?: (value: boolean) => void | undefined;
  isAddLiquidity?: boolean;
  setIsAddLiquidity?: (value: boolean) => void | undefined;
};

const Header = ({ text, isUnStake, setIsUnStake, isAddLiquidity, setIsAddLiquidity }: HeaderPagesProps) => {
  const pathname = usePathname();
  const t = useTranslations();
  const router = useRouter();

  return (
    <div className="header">
      <Navbar text={text} />
      {pathname === "/dashboard" ? <DataStakesClaims /> : null}
      {pathname === "/profile" ? <ProfileHeader /> : null}
      {pathname === "/members" ? <MembersHeader /> : null}
      {pathname === "/rewardPool" ? <RewardHeader /> : null}
      {pathname === "/operations" ? <HeaderOperations isUnStake={isUnStake} setIsUnStake={setIsUnStake}/> : null}
      {pathname === "/liquidityPool" ? <HeaderLiquidity isAddLiquidity={isAddLiquidity} setIsAddLiquidity={setIsAddLiquidity}/> : null}
      {pathname === "/governance" ? <ButtonPrimary text={t("Create Proposal")} onClickFn={() => router.push("/governance/create")}/> : null}
    </div>
  );
};

export default Header;
