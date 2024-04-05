"use client";
import React from "react";
import { dataStakesAndClaims, DataStakesAndClaims } from "../moskData";
import { useTranslations } from "next-intl";

const DataStakesClaims = () => {
  const t = useTranslations();
  const dataUser: DataStakesAndClaims = dataStakesAndClaims;

  return (
    <div className="container-dataStakesClaims">
      <div className="container-aviable">
        <p>$ {dataUser.aviableToClaim}</p>
        <span>{t("Available to Claim")}</span>
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
