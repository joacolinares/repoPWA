"use client";
import React from "react";
import { dataStakesAndClaims, DataStakesAndClaims } from "../moskData";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DataStakesClaims = () => {
  const t = useTranslations();
  const dataUser: DataStakesAndClaims = dataStakesAndClaims;
  const router = useRouter();

  return (
    <div className="container-dataStakesClaims">
      <div className="container-aviable flex flex-col items-center">
        <p>$ {dataUser.aviableToClaim}</p>
        <span>{t("Available to Claim")}</span>
        <Link href={"/operations?type=claim"} className="w-[135px] cursor-pointer mt-2 text-[10px] text-white font-bold py-1 px-2 rounded-[6px] border border-solid border-white">{t("Click to Claim")}</Link>
      </div>
      <div className="container-claims">
        <p>$ {dataUser.claims}</p>
        <span>{t("Claims")}</span>
      </div>
      <div className="container-active-stakes">
        <p>$ {dataUser.activeStakes}</p>
        <span>{t("Active Stakes")}</span>
      </div>
      <div className="container-stakes-unStakes">
        <div className="container-stakes">
          <p>$ {dataUser.stakes}</p>
          <span>{t("Stakes")}</span>
        </div>
        <div className="container-Unstakes">
          <p>$ {dataUser.unStakes}</p>
          <span>{t("Un-Stakes")}</span>
        </div>
      </div>
    </div>
  );
};

export default DataStakesClaims;
