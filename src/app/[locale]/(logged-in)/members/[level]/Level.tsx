"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import HeaderPages from "@/app/components/generals/HeaderPages";
import { useTranslations } from "next-intl";
import { useUserLevelStore } from "@/store/user-level";

const LevelMembers = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const { selectPlan, ...lvlStore } = useUserLevelStore();
  const [isOpen, setIsOpen] = useState<string[]>([]);

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

  const handleIsOpen = (wallet: string) => {
    setIsOpen((prevState) => {
      if (prevState.includes(wallet)) {
        return prevState.filter((item) => item !== wallet);
      } else {
        return [...prevState, wallet];
      }
    });
  };

  return (
    <div>
      <HeaderPages text={headerText} />

      <div className="container-body min-h-[calc(100vh-100px)] bg-gradient-to-t from-[#0E0E33] to-[#39307B] px-6 pb-24 text-white">
        <h1 className="text-[20px] font-bold mb-1 text-[#20DABB]">
          {t("Level")} {lvlStore.level}
        </h1>
        <p className="text-[14px] mb-4">{t("Tap on each one to see more")}</p>


        {lvlStore.membersInfo?.length > 0 ? (     
        <div className="container-levels-members py-4 rounded-2xl bg-[#ffffff14]">
          {lvlStore.membersInfo?.map((item) => (
            <div
              key={item.wallet}
              className={`cursor-pointer  last:pb-0 first:pt-0 border-solid border-b-[1px] border-[#ffffff1a] last:border-b-0 ${
                isOpen.includes(item.wallet) ? "pt-4 pb-0" : "pt-4 pb-4"
              }`}
            >
              <div
                className="container-info-level px-4 flex items-center justify-between"
                onClick={() => handleIsOpen(item.wallet)}
              >
                <div className="container-wallet">
                  <h3 className="text-[14px]">
                    {t("Wallet")} {item.wallet}
                  </h3>
                  <p className="text-[16px] font-bold mt-2">{item.name}</p>
                </div>
                <div className="container-sponsor-total">
                  <div className="container-total mb-4">
                    <p className="text-[12px] text-[#A9AEB4] mb-2">
                      {t("SPONSOR")}
                    </p>
                    <p className="text-[16px] font-bold">{item.sponsor}</p>
                  </div>
                  <div className="container-residual">
                    <p className="text-[12px] text-[#A9AEB4] mb-2">
                      {t("TOTAL STAKING")}
                    </p>
                    <p className="text-[16px] font-bold">
                      $ {item.totalStaking}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={` ${
                  isOpen.includes(item.wallet) ? "block" : "hidden"
                }`}
              >
                {item.walletInfo?.map((walletInfo, index) => (
                  <div
                    className={`container-info-wallet px-4 bg-[#554D77] flex items-center justify-between py-4 first:border-t-[1px] border-solid border-b-[1px] border-[#ffffff1a] last:border-b-0 ${
                      isOpen.includes(item.wallet) ? "first:mt-4" : "first:mt-0"
                    }`}
                    key={index}
                  >
                    <div className="container-state">
                      <h3 className="text-[14px] border border-solid border-[#20DABB] text-center py-1 rounded-full">
                        {walletInfo.status}
                      </h3>
                      <p className="text-[16px] font-bold mt-2">
                        {walletInfo.period}
                      </p>
                    </div>
                    <div className="container-investment-total">
                      <div className="container-investment mb-4">
                        <p className="text-[12px] text-[#A9AEB4] mb-2">
                          {t("INVESTMENT")}
                        </p>
                        <p className="text-[16px] font-bold">
                          $ {walletInfo.investment}
                        </p>
                      </div>
                      <div className="container-total">
                        <p className="text-[12px] text-[#A9AEB4] mb-2">
                          {t("START DATE")}
                        </p>
                        <p className="text-[16px] font-bold">
                          {walletInfo.startDate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>) : (<h1 className="text-white font-bold text-[18px] text-center">{t("Has no members at this level")}</h1> )
        }
   
      </div>
    </div>
  );
};

export default LevelMembers;
