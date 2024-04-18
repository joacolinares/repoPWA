"use client";
import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import { useTranslations } from "next-intl";
import React from "react";

const AddLiquidity = () => {
  const t = useTranslations();

  return (
    <div className="min-h-[calc(100vh-150px)] flex flex-col justify-between">
      <div className="container-up m-6 ">
        <div className="container-purple py-6 px-12 rounded-[20px] shadow-md bg-[#7A2FF4] text-white text-center">
          <p className="text-[24px] font-bold mb-2">$ 10,000.00</p>
          <p className="text-[14px]">{t("Available to Stake")}</p>
        </div>
        <div className="p-6 rounded-[16px] shadow-md mt-2">
          <p>{t("Here you can make new stakes")}</p>
        </div>
      </div>

      <div className="container-down mb-[60px] px-[24px] pt-[32px] pb-[96px] rounded-t-[40px] bg-gradient-to-t from-[#0E0E33] to-[#39307B]">
        <div className="container-Stake-amount text-white p-6 rounded-[16px] border border-solid border-[#AD98FF] bg-gradient-to-t from-[#0E0E33] to-[#39307B] shadow-md">
          <h2 className="text-[18px] font-bold mb-4">{t("Stake")}</h2>
          <div className="mb-6 rounded-[10px] border border-solid border-[#F2F3F8] p-2">
            <div className="flex justify-between items-center mb-4">
              <p className="text-[14px] font-bold ">{t("Amount")}</p>

              <p className="text-[12px] ">
                {t("MIN STAKE")}: {250.0}
              </p>
            </div>
            <div className="container-input relative">
              <input
                type="number"
                className="rounded-[10px] p-4 bg-[#ffffff1a] w-full"
                value={0.0}
                onChange={(e) => console.log(e.target.value)}
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px] font-bold text-[#A9AEB4]">
                {t("MAX")}
              </button>
            </div>
          </div>
          <div>
            <ButtonPrimary text={t("Approve Contract")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLiquidity;
