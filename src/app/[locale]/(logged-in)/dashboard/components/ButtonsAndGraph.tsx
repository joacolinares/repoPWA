"use client";
import React from "react";
import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import ButtonSecondary from "@/app/components/generals/ButtonSecondary";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ButtonsAndGraph = () => {
  const t = useTranslations();

  return (
    <div className="component-buttons-graph p-[24px]">
      <div className="container-btn flex justify-between items-center">
        <Link href={"/liquidityPool?type=addLiquidity"} className="w-[48%]">
          <ButtonPrimary text={t("Stake")} />
        </Link>
        <Link href={"/operations?type=unStake"} className="w-[48%]">
          <ButtonSecondary text={t("Un-Stake")}/>
        </Link>
    </div>
    </div>

  );
};

export default ButtonsAndGraph;
