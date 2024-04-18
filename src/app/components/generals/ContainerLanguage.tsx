"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { setCookieClientSide } from "@/lib/utils";
import LanguajeSVG from "@/assets/icons/LanguajeIcon";

const ContainerLanguage = () => {
  const submenuRef = useRef<null | HTMLDivElement>(null);
  const [isOpenMenuLanguage, setIsOpenMenuLanguage] = useState(false);

  // funcion  para cerrar el menu de idiomas cuando se haga click fuera de el
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setIsOpenMenuLanguage(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpenMenuLanguage]);

  function openMenuLanguage() {
    setIsOpenMenuLanguage(!isOpenMenuLanguage);
  }

  const locale = useLocale();

  function changeLanguage(lang: string) {
    setCookieClientSide("NEXT_LOCALE", lang);
    location.reload();
  }

  // console.log(i18n)
  const languageList = [
    {
      name: "Español",
      type: "es",
    },
    {
      name: "English",
      type: "en",
    },
    {
      name: "中國人",
      type: "zh",
    },
    {
      name: "Русский",
      type: "ru",
    },
    {
      name: "عرب",
      type: "ar",
    },
  ];

  let ImagenesObj = {
    es: "ES",
    en: "EN",
    zh: "CH",
    ru: "RU",
    ar: "AR",
  };

  return (
    <div className="container-idiomas relative " ref={submenuRef}>
        <div onClick={openMenuLanguage}>
          <LanguajeSVG stroke="#fff" width={24} height={24}/>
        </div>
        
        <div
          className={`list-idiomas ${isOpenMenuLanguage ? "show" : "hidden"}`}
        >
          <ul className="absolute space-y-1 top-8 py-1 border-solid border-t-2 border-[#39307B] w-[70px] bg-white dark:bg-darkslateblack-100  shadow-md text-center rounded-md">
            {languageList.map((pais, index) => (
              <li
                className="container-bandera cursor-pointer text-[14px] md:text-sm text-black dark:text-white hover:text-[#7A2FF4] dark:hover:text-[#3D93DA]"
                key={index}
                onClick={() => {
                  changeLanguage(pais.type);
                  openMenuLanguage();
                }}
              >
                {pais.name}
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default ContainerLanguage;
