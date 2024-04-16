"use client";
import React, { useState } from "react";
import Header from "@/app/components/generals/Header";
import { usePathname } from "next/navigation";
import UnStake from "./components/UnStake";
import Claim from "./components/Claim";
import {
  DataOperationsClaim,
  DataOperationsUnStake,
} from "./components/moskData";

interface Props {
  dataClaim: DataOperationsClaim[];
  dataUnStake: DataOperationsUnStake[];
}

const Operations = ({ dataClaim, dataUnStake }: Props) => {
  const pathname = usePathname();
  const [isUnStake, setIsUnStake] = useState(true);

  return (
    <div>
      <Header
        isUnStake={isUnStake}
        setIsUnStake={setIsUnStake}
        text={pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
      />

      {isUnStake ? (
        <UnStake dataUnStake={dataUnStake} />
      ) : (
        <Claim dataClaim={dataClaim} />
      )}
    </div>
  );
};

export default Operations;
