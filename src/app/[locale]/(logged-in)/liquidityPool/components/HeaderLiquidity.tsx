"use client"
import { useTranslations } from 'next-intl';
import React from 'react'

interface Props {
    isAddLiquidity: boolean;
    setIsAddLiquidity: (value: boolean) => void;
}

const HeaderLiquidity = ({isAddLiquidity, setIsAddLiquidity}: Props) => {
     const t = useTranslations();

    return (
      <div className="h-[35px] px4 rounded-[10px] bg-[#ffffff1a] flex items-center justify-between">
        <div className={`w-2/4 flex items-center justify-center cursor-pointer ${isAddLiquidity === false ? "text-[#1E0E39] font-bold bg-[white] rounded-[10px] h-full" : "text-[#F2F3F8]"}`} onClick={() => setIsAddLiquidity(false)}>
          <p className=" text-[14px]" >{t("My Liquidity")}</p>
        </div>
        <div className={`w-2/4 flex items-center justify-center cursor-pointer ${isAddLiquidity ? "text-[#1E0E39] font-bold bg-[white] rounded-[10px] h-full " : "text-[#F2F3F8]"}`} onClick={() => setIsAddLiquidity(true)}  >
          <p className="text-[14px]">{t("Add Liquidity")}</p>
        </div>
      </div>
    )
}

export default HeaderLiquidity