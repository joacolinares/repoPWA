"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/generals/Header";

const RewardPool = () => {
  const pathname = usePathname();

// Esta funcion sirve para colocar la primera letra en mayuscula y separar cuando la url tiene dos nombres
  function capitalizeFirstLetter() {
    let index = 0;
    for (let i = 1; i < pathname.length; i++) {
      if (pathname[i] === pathname[i].toUpperCase()) {
        index = i;
        break;
      }
    }

    const firstWord = pathname.slice(1, index);
    const capitalizedFirstWord =
      firstWord.charAt(0).toUpperCase() + firstWord.slice(1);

    const secondWord = pathname.slice(index);
    const capitalizedSecondWord =
      secondWord.charAt(0).toUpperCase() + secondWord.slice(1);

    return `${capitalizedFirstWord} ${capitalizedSecondWord}`;
  }

  const capitalizedWords = capitalizeFirstLetter();

  return (
    <div>
      <Header text={capitalizeFirstLetter()} />
    </div>
  );
};

export default RewardPool;
