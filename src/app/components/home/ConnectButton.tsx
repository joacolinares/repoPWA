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
import {  PolygonAmoyTestnet } from "@thirdweb-dev/chains";
import abi from './abis/abi.json'
const ConnectButton = () => {
    
    const router = useRouter();
    const wallet = useAddress()


    const llamado = async() =>{
        console.log("Llamado")
        const sdk = new ThirdwebSDK(PolygonAmoyTestnet);
        const contract = await sdk.getContract(
          "0xb9A0d17E8B0F5A9514Cc03D3C0fC2851b1d87E0b", 
          abi,
        );

        const personalDataMap = await contract.call(
            "personalDataMap", 
            [wallet]
          );
        
          console.log(personalDataMap)


          if(personalDataMap.encryptedEmail == ''){
            router.push("/register");
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
