"use client";
import React, { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/imgs/Logo.png";
import { useTranslations } from "next-intl";
import ButtonPrimary from "../generals/ButtonPrimary";
import ButtonSecondary from "../generals/ButtonSecondary";
import { ConnectWallet, ThirdwebProvider, WalletConnect, useAddress } from "@thirdweb-dev/react";
import {  PolygonAmoyTestnet } from "@thirdweb-dev/chains";
import './buttonStyle.css'
import ConnectButton from "./ConnectButton";
const LoginPage = () => {
  const t = useTranslations();
  const router = useRouter();

  const btnRedirect = (): void => {
    router.push("/register")
  };



  return (
    <ThirdwebProvider
    // activeChain={BinanceTestnet}
    activeChain={PolygonAmoyTestnet}
    clientId="95347962d3e713129610a9c9f4dbce58"
  >
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
         {/* <ButtonPrimary
            text={t("Connect your Wallet")}
            onClickFn={btnRedirect}
  />*/}
        
        <ConnectButton/>
        </div>

        <div className="container-btn-secondary">
          <ButtonSecondary text={t("Connect with Email")} />
        </div>
      </div>
      <div className="container-down"></div>
    </div>
    </ThirdwebProvider>
  );
};

export default LoginPage;
