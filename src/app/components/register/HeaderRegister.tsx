"use client";
import React from "react";
import Image from "next/image";
import IconLogo from "@/assets/imgs/LogoTipoPeq.png";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

type Props = {
  step: number;
};

const HeaderRegister = ({step}: Props) => {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <div className="headerRegister">
      <div className="headerRegister-logo">
        <Image src={IconLogo} alt="logo" width={28} height={24} />
      </div>
      <div className="headerRegister-title">
        <h1>{t("welcome")}!</h1>
        <p>{t("Please complete the registration")}</p>
      </div>
      <div className="container-bars-progress">
        <div className="div-bar">
          <div className={`div-progress ${step <= 1 ? "--progressActual" : "--div-progressCompleted"}`}></div>
        </div>
        <div className="div-bar bar2">
          <div className={`div-progress ${step === 2 ? "--progressActual" : step > 2 ? "--div-progressCompleted" : ""}`}></div>
        </div>
        <div className="div-bar bar3">
          <div className={`div-progress ${step === 3 ? "--progressActual" : step > 3 ? "--div-progressCompleted" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRegister;
