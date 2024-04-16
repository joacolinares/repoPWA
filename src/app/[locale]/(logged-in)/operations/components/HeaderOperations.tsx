"use client";
import React from "react";
import { useTranslations } from "next-intl";

interface Props {
    isUnStake?: boolean
    setIsUnStake: (value: boolean) => void
}

const HeaderOperations = ({isUnStake, setIsUnStake}: Props) => {
  const t = useTranslations();

  return (
    <div className="h-[35px] px4 rounded-[10px] bg-[#ffffff1a] flex items-center justify-between">
      <div className={`w-2/4 flex items-center justify-center cursor-pointer ${isUnStake === false ? "text-[#1E0E39] font-bold bg-[white] rounded-[10px] h-full" : "text-[#F2F3F8]"}`} onClick={() => setIsUnStake(false)}>
        <p className=" text-[14px]" >{t("Claim")}</p>
      </div>
      <div className={`w-2/4 flex items-center justify-center cursor-pointer ${isUnStake ? "text-[#1E0E39] font-bold bg-[white] rounded-[10px] h-full " : "text-[#F2F3F8]"}`} onClick={() => setIsUnStake(true)}  >
        <p className="text-[14px]">{t("Un-Stake")}</p>
      </div>
    </div>
  );
};

export default HeaderOperations;
