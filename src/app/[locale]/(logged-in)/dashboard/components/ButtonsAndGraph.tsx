"use client";
import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import ButtonSecondary from "@/app/components/generals/ButtonSecondary";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonsAndGraph = () => {
  const t = useTranslations();
  const router = useRouter();

  return (
    <div className="component-buttons-graph p-[24px]">
      <div className="container-btn flex justify-between items-center">
        <div className="w-[48%]">
          <ButtonPrimary text={t("Stake")} onClickFn={() => router.push("/stake")}/>
        </div>
        <div className="w-[48%]">
          <ButtonSecondary text={t("Un-Stake")} onClickFn={() => router.push("/unstake")}/>
        </div>
    </div>
    </div>

  );
};

export default ButtonsAndGraph;
