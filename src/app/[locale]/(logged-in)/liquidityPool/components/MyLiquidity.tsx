"use client";
import React from "react";
import IconUpPorcentaje from "@/assets/icons/EstadisticasUp.svg";
import Image from "next/image";
import ChartsDonus from "@/app/components/generals/charts/ChartsDonus";
import Dollar from "@/assets/icons/DollarLiquidity.svg";
import { useTranslations } from "next-intl";

const MyLiquidity = () => {
  const t = useTranslations();

  return (
    <div className="min-h-[calc(100vh-150px)] flex flex-col justify-between">
      <div className="container-up m-6 ">
        <div className="container-purple py-6 px-12 rounded-[20px] shadow-md bg-[#7A2FF4] text-white text-center">
          <p className="text-[14px] mb-2">TVL</p>
          <p className="text-[24px] font-bold">$ 100,000.00</p>
          {/* <div className="flex justify-between items-center mx-auto w-[165px] px-[12px] py-1 rounded-[20px] bg-gradient-to-t from-[#ffffff1a] to-[#ffffff00]">
            <p className="text-[14px] font-bold mr-2">120.234,21</p>
            <p className="text-[14px] font-bold mr-2 opacity-[0.6]">+8,1%</p>
            <Image
              src={IconUpPorcentaje}
              alt="porcentaje"
              width={18}
              height={18}
            />
          </div> */}
        </div>
        <div>
          <ChartsDonus />
        </div>
      </div>
      <div className="container-down px-[24px] pt-[32px] pb-[96px] rounded-t-[40px] bg-gradient-to-t from-[#0E0E33] to-[#39307B]">
        <div className="container flex justify-center items-center p-4 rounded-[20px] bg-gradient-to-t from-[#0E0E33] to-[#39307B]">
          <div className="container-left text-white rounded-[10px] bg-[#7A2FF4] mr-4 w-[140px] h-[170px] flex flex-col items-start justify-center p-4">
            <div className="p-4 rounded-full bg-gradient-to-t from-[#0E0E33] to-[#39307B] w-[56px] h-[56px]">
              <Image src={Dollar} alt="dollar" width={24} height={24} />
            </div>

            <p className="text-[12px] font-bold my-4">{t("My Liquidity")}</p>
            <p className="text-[14px] font-bold">$ 1,000.00</p>
          </div>

          <div className="container-right text-[#A9AEB4] rounded-[10px] bg-white w-[140px] h-[170px] flex flex-col items-start justify-center p-4">
            <div className="p-4 rounded-full bg-gradient-to-t from-[#0E0E33] to-[#39307B] w-[56px] h-[56px]">
                <Image src={Dollar} alt="dollar" width={24} height={24} />
              </div>

              <p className="text-[12px] font-bold my-4">{t("My Share")}</p>
              <p className="text-[14px] font-bold">1 %</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyLiquidity;
