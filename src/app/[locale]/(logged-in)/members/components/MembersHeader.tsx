"use client";
import { useTranslations } from "next-intl";
import React from "react";

const MembersHeader = () => {
  const t = useTranslations();

  return (
    <div className="members-header px-6">
      <div className="container p-2 rounded-[16px] border-solid border-[1.2px] border-[#7A2FF4]">
        <div className="container-totalStaked rounded-[10px] bg-[#7A2FF4] p-6 text-white text-center mb-2">
          <p className="text-[24px] font-bold mb-2">$ 170,000.00</p>
          <p className="text-[14px]">{t("Total Staked")}</p>
        </div>
        <div className="container-members-estimated flex justify-between items-center text-center text-[#7A2FF4] space-x-2">
          <div className="container-MyMembers bg-[#F2F3F8] rounded-[10px] p-2">
            <p className="text-[16px] font-bold mb-1">15</p>
            <p className="text-[14px]">{t("My Members Team")}</p>
          </div>
          <div className="container-totalStaked bg-[#F2F3F8] rounded-[10px] p-2">
            <p className="text-[16px] font-bold mb-1">$ 83,400.00</p>
            <p className="text-[14px]">{t("Estimated Benefits")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersHeader;
