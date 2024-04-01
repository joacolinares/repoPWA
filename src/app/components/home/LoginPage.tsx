"use client";
import React from "react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/imgs/Logo.png";
import { useTranslations } from "next-intl";
import ButtonPrimary from "../generals/ButtonPrimary";
import ButtonSecondary from "../generals/ButtonSecondary";

const LoginPage = () => {
  const t = useTranslations();
  const router = useRouter();

  const btnRedirect = (): void => {
    router.push("/register")
  };

  return (
    <div className="welcome">
      <div className="container-up">
        <div className="container-text">
          <Image src={Logo} alt="logo" width={160} height={40} />
          <h1 className="title">
            {t("Welcome to")} <span>Defily</span>!
          </h1>
          <span className="text-span">
            {t("Please connect to enter the system")}
          </span>
        </div>
      </div>
      <div className="container-center">
        <div className="container-btn-primary">
          <ButtonPrimary
            text={t("Connect your Wallet")}
            onClickFn={btnRedirect}
          />
        </div>
        <div className="container-btn-secondary">
          <ButtonSecondary text={t("Connect with Email")} />
        </div>
      </div>
      <div className="container-down"></div>
    </div>
  );
};

export default LoginPage;
