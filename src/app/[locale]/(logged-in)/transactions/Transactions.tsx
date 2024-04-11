"use client";
import React from "react";
import { DataTransactions } from "./moskData";
import { useTranslations } from "next-intl";
import { usePaginate } from "@/app/components/generals/pagination/usePaginate";
import Pagination from "@/app/components/generals/pagination/Pagination";
import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import { usePathname, useRouter } from "next/navigation";
import HeaderPages from "@/app/components/generals/HeaderPages";

interface Props {
  data: DataTransactions[];
  isDashboard?: boolean;
}

const Transactions = ({ data, isDashboard }: Props) => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const numberByPage = 10;
  const {
    currentPage,
    elemetsVisibleByPage,
    goToNextPage,
    goToPage,
    goToPreviousPage,
    totalPages,
  } = usePaginate({
    listElement: data as DataTransactions[],
    numberByPage: numberByPage,
  });

  const getElementsToShow = () => {
    if (!isDashboard) {
      return elemetsVisibleByPage;
    } else {
      return elemetsVisibleByPage.filter((_, index) => index < 8);
    }
  };

  return (
    <>
      {!isDashboard ? (
        <HeaderPages
          text={pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
        />
      ) : null}

      <div
        className={`${
          isDashboard
            ? "px-[24px] pt-[32px] pb-[96px] rounded-t-[40px] bg-gradient-to-t from-[#0E0E33] to-[#39307B]"
            : "px-[24px]"
        }`}
      >
        {isDashboard ? (
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h1 className="text-[20px] text-white  font-bold">
                {t("Transactions")}
              </h1>
              <div>
                <ButtonPrimary
                  text={t("See More")}
                  onClickFn={() => router.push("/transactions")}
                />
              </div>
            </div>
            <p className="text-white text-[14px] font-normal">
              {t("Showing the last 8 transactions")}
            </p>
          </div>
        ) : null}
        <div className="component-transactions">
          {getElementsToShow().map((transaction) => (
            <div key={transaction.id} className="container-map">
              <div className="container-type">
                <p>{transaction.type}</p>
                <span>{transaction.date} </span>
                <span>{transaction.time}</span>
              </div>
              <div className="container-amount">
                <p>$ {transaction.amount}</p>
                <span>
                  +${transaction.amountFee} {t("Fee")}
                </span>
              </div>
            </div>
          ))}
          {!isDashboard ? (
            <div className="flex justify-center mt-5 ">
              <Pagination
                currentPage={currentPage}
                goToNextPage={goToNextPage}
                goToPage={goToPage}
                goToPreviousPage={goToPreviousPage}
                totalPages={totalPages}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Transactions;
