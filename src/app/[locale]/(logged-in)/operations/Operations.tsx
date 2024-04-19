"use client";
import React, { useState } from "react";
import Header from "@/app/components/generals/Header";
import { usePathname, useSearchParams } from "next/navigation";
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
  const search = useSearchParams().get("type");

  return (
    <div>
      <Header
        text={pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
      />

      {search === "claim" ? (
        <Claim dataClaim={dataClaim} />
      ) : (
        <UnStake dataUnStake={dataUnStake} />
      )}
    </div>
  );
};

export default Operations;
