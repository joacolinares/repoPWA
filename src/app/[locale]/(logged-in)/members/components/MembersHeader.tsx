"use client";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import { useTranslations } from "next-intl";
import { useRouter, redirect } from 'next/navigation';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {  BinanceTestnet } from "@thirdweb-dev/chains";
import abi from './abis/abi.json'
import { ThirdwebProvider, Web3Button, useAddress } from "@thirdweb-dev/react";


const MembersHeader = () => {
  const t = useTranslations();
  const router = useRouter();

  const [sponsorSplitAcumulation, setSponsorSplitAcumulation] = useState(0)
  const [claims, setClaims] = useState(0)
  const [team, setTeam] = useState(0)


  const redirectToWithdrawRewards = () => {
    router.push("/members/withdraw");
  }

  const address = useAddress()
 

  const loadInfo = async() =>{
    const sdk = new ThirdwebSDK(BinanceTestnet);
    const contract = await sdk.getContract(
      "0xbd42850F0Cca688e6D47FAA22Fd2f38ed1966ba7", 
      abi,
    );


    if(address != undefined){
      const sponsorSplitAcumulation = await contract.call(
        "sponsorSplitAcumulation", 
        [address]
      );
      console.log(sponsorSplitAcumulation)
      console.log(parseInt(sponsorSplitAcumulation._hex,16))
      const claims = await contract.call(
        "claims", 
        [address]
      );
      const team = await contract.call(
        "team", 
        [address]
      );

      setSponsorSplitAcumulation(parseInt(sponsorSplitAcumulation._hex,16))
      setClaims(parseInt(claims._hex,16))
      setTeam(parseInt(team._hex,16))

      console.log(team)

    }
  }


  useEffect(() => {
    loadInfo()
  }, [address])



  return (
    <ThirdwebProvider
      // activeChain={BinanceTestnet}
      activeChain={BinanceTestnet}
      clientId="95347962d3e713129610a9c9f4dbce58"
    >
    <div className="members-header px-6">
      <div className="container p-2 rounded-[16px] border-solid border-[1.2px] border-[#7A2FF4]">
        <div className="container-totalStaked rounded-[10px] bg-[#7A2FF4] p-6 text-white text-center">
          <p className="text-[24px] font-bold mb-2">$ {sponsorSplitAcumulation / 1000000000000000000}  </p>
          <p className="text-[14px]">{t("Available Rewards")}</p>
        </div>
        <div className="container-members-estimated mt-2 flex justify-between items-center text-center text-[#7A2FF4] space-x-2">
          <div className="container-MyMembers bg-[#F2F3F8] flex flex-col justify-center items-center rounded-[10px] py-2 px-4 w-2/4 h-[75px]">
            <p className="text-[16px] font-bold mb-1">{team}</p>
            <p className="text-[14px]">{t("My Members Team")}</p>
          </div>
          <div className="container-totalStaked bg-[#F2F3F8] flex flex-col justify-center items-center rounded-[10px] py-2 px-4 w-2/4 h-[75px]">
            <p className="text-[16px] font-bold mb-1">$ {claims / 1000000000000000000}</p>
            <p className="text-[14px]">{t("Total Rewards")}</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
         {/* <ButtonPrimary text={t("Withdraw Rewards")} onClickFn={redirectToWithdrawRewards}/>*/}
          <Web3Button
          //  contractAddress="0x0cda7c31216405d997479f3e0219a5d9f3d9909c"
          contractAddress="0xbd42850F0Cca688e6D47FAA22Fd2f38ed1966ba7"
          contractAbi={abi}
          action={async (contract) => {
                await contract.call("getRewards", [])
          }}
          onSuccess={() => alert("Succes")}
          onError={() => alert(`Error `)}
          className="buyMembershipClass"
        >
          {t("Withdraw Rewards")}
        </Web3Button>
        </div>
    </div>
    </ThirdwebProvider>
  );
};

export default MembersHeader;
