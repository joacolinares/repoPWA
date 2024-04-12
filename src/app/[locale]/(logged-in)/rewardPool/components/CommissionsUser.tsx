"use client";
import React from "react";
import { CommissionsUserData } from "./moskData";
import Pagination from "@/app/components/generals/pagination/Pagination";
import { useTranslations } from "next-intl";
import { usePaginate } from "@/app/components/generals/pagination/usePaginate";

interface Props {
  commissionInfo: CommissionsUserData[];
}

const CommissionsUser = ({ commissionInfo }: Props) => {
  const t = useTranslations();

  const numberByPage = 8;
  const {
    currentPage,
    elemetsVisibleByPage,
    goToNextPage,
    goToPage,
    goToPreviousPage,
    totalPages,
  } = usePaginate({
    listElement: commissionInfo,
    numberByPage: numberByPage,
  });

  return (
    <div className="text-white">
      <h1 className="text-[20px] font-bold mb-[16px]">{t("Commissions")}</h1>
      <div className="container-info px-4 rounded-[20px] bg-[#ffffff14]">
        {elemetsVisibleByPage.map((item) => (
          <div
            className="container-info-user flex items-center justify-between py-[16px] border-b border-solid border-[#ffffff14]"
            key={item.id}
          >
            <div className="container-left">
              <p className="text-[16px] font-bold mb-1">$ {item.amount}</p>
              <p className="text-[12px] text-[#A9AEB4]">{item.fecha}</p>
            </div>
            <div className="container-right">
              <p className="text-[16px] font-bold mb-1">{item.id}</p>
              <p className="text-[12px] text-[#A9AEB4]">
                {t("Level")} {item.level}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 ">
        <Pagination
          currentPage={currentPage}
          goToNextPage={goToNextPage}
          goToPage={goToPage}
          goToPreviousPage={goToPreviousPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default CommissionsUser;
