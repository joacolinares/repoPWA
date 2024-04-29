"use client";
import React, { useEffect, useState } from "react";
import CheckIcon from "@/assets/icons/CheckIcon";
import CloseIcon from "@/assets/icons/CloseIcon";
import { useTranslations } from "next-intl";
import { useUserPlanStore } from "@/store/user-plan";
import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import { useRouter } from "next/navigation";
import {  BinanceTestnet } from "@thirdweb-dev/chains";
import abi from './abis/abi.json'
import { ThirdwebProvider, useAddress } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const CurrentPlan = () => {
  const t = useTranslations();
  const { updatePlan, ...plan } = useUserPlanStore();
  const router = useRouter();
  const [membresiaActual, setMembresiaActual] = useState("Cargando...")
  const address = useAddress()

  const loadInfo = async() =>{
    const sdk = new ThirdwebSDK(BinanceTestnet);
    const contract = await sdk.getContract(
      "0xbd42850F0Cca688e6D47FAA22Fd2f38ed1966ba7", 
      abi,
    );
     if(address != undefined){
      console.log(address)
      const actualMembershipNumber = await contract.call(
       "actualMembershipNumber", 
        [address]
     );
      const memberships = await contract.call(
       "memberships", 
        [parseInt(actualMembershipNumber._hex,16)]
     );
        console.log(memberships)
        setMembresiaActual(memberships.membershipTitle)
    }
  }

  useEffect(() => {
    loadInfo()
  }, [address])
  


  return (
    <div className="px-[24px]">
      <div className="container-modal p-[24px] rounded-[16px] bg-white shadow-md mb-[24px] mt-[32px]">
        <div className="rounded-tl-xl rounded-tr-xl">
          <p className="text-[12px] font-bold text-[#A9AEB4] mb-2">
            {t("CURRENT PLAN")}
          </p>
          <p className="font-bold text-[24px] text-[#7A2FF4] mb-2">
          {membresiaActual}
          </p>
        </div>
        <div className="">
          <div className="rounded-[10px] bg-[#F2F3F8] flex justify-between items-center p-[8px]">
            <p className="text-[#1E0E39] font-bold text-[14px]">
              {t("Personalized referral link")}
            </p>
            <div className="container-check bg-[#7A2FF4] rounded-[10px] w-[48px] h-[34px] flex justify-center items-center">
              {plan?.plan === "Basic" ? <CloseIcon /> : <CheckIcon />}
            </div>
          </div>
          <div className="rounded-[10px] bg-[#F2F3F8] flex justify-between items-center p-[8px] my-[24px]">
            <p className="text-[#1E0E39] font-bold text-[14px]">
              {t("Profit from referrals membership")}
            </p>
            <div className="container-check bg-[#7A2FF4] rounded-[10px] w-[48px] h-[34px] flex justify-center items-center">
              <span className="text-[14px] text-[#ffffff]">
                {plan?.profitReferralsMembership}
              </span>
            </div>
          </div>
          <div className="rounded-[10px] bg-[#F2F3F8] flex justify-between items-center p-[8px]">
            <p className="text-[#1E0E39] font-bold text-[14px]">
              {t("Profit from referrals earnings")}
            </p>
            <div className="container-check bg-[#7A2FF4] rounded-[10px] w-[48px] h-[34px] flex justify-center items-center">
              <span className="text-[14px] text-[#ffffff]">
                {plan?.profitReferralsEarnings}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ButtonPrimary
        text={t("Upgrade your Membership")}
        onClickFn={() => router.push("/members/selectMember")}
      />
    </div>
  );
};

export default CurrentPlan;
