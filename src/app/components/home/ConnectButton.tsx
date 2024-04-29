"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  dataLevelsMock,
  DataMembers,
} from "@/app/[locale]/(logged-in)/members/components/moskData";
import './buttonStyle.css'
import { ConnectWallet, ThirdwebSDK, useAddress } from "@thirdweb-dev/react";
import {  useRouter } from "next/navigation";
import {  BinanceTestnet } from "@thirdweb-dev/chains";
import abi from './abis/abi.json'
const ConnectButton = () => {
    
    const router = useRouter();
    const wallet = useAddress()


    const llamado = async() =>{
        console.log("Llamado")
        const sdk = new ThirdwebSDK(BinanceTestnet);
        const contract = await sdk.getContract(
          "0xCe64023d7847f5b77d91520514106F52f10C9524", 
          abi,
        );

        const personalDataMap = await contract.call(
            "personalDataMap", 
            [wallet]
          );
        
          console.log(personalDataMap)


          if(personalDataMap.encryptedEmail == ''){
            const currentUrl = window.location.href;
            const queryStringIndex = currentUrl.indexOf("?");
            if (queryStringIndex !== -1) {
              const queryString = currentUrl.slice(queryStringIndex + 1);
              const params = new URLSearchParams(queryString);
              const referralWallet = params.get("refferalWallet");
              console.log(referralWallet)
              if (referralWallet) {
                router.push(`/register?refferalWallet=${referralWallet}`);
              }else{
                router.push(`/register?refferalWallet=0x0000000000000000000000000000000000000123`);
              }
            } else{
              router.push(`/register?refferalWallet=0x0000000000000000000000000000000000000123`);
            }
          }else{
            router.push("/dashboard");
          }
    }

    useEffect(() => {
      console.log(wallet)
      if(wallet == undefined){
        console.log("No registrado")
      }else{
       console.log("registrado")
       llamado()
      }
    }, [wallet])

  return (
   <>
   <div>
   <ConnectWallet className="buyMembershipClass" />
   </div>
   </>
  );
};

export default ConnectButton;
