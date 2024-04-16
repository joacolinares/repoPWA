"use client"
import Header from '@/app/components/generals/Header';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import AddLiquidity from './components/AddLiquidity';
import MyLiquidity from './components/MyLiquidity';

const Liquidity = () => {
    const pathname = usePathname();
    const [isAddLiquidity, setIsAddLiquidity] = useState(false)

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
        <Header text={capitalizeFirstLetter()} isAddLiquidity={isAddLiquidity} setIsAddLiquidity={setIsAddLiquidity}/>

        {
          isAddLiquidity ? (<AddLiquidity />) : (<MyLiquidity />) 
        }
    </div>
  )
}

export default Liquidity