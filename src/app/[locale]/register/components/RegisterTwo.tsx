"use client";
import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core"; // esto solo es tipado
import { validatePhoneNumber, validateCountry } from "@/utils/value_object_register_steps";
import { ThirdwebProvider, Web3Button } from "@thirdweb-dev/react";
var CryptoJS = require( 'crypto-js' );
import abi from './abis/abi.json'
import './buttonStyle.css'
import {  BinanceTestnet } from "@thirdweb-dev/chains";

type Props = {
  setStepCompleted: (value: number) => void;
};

const RegisterTwo = ({ setStepCompleted}: Props) => {
  const t = useTranslations();
  const [phone, setPhone] = useState<E164Number | undefined>();
  const [country, setCountry] = useState<string>("");
  const [fieldError, setFieldError] = useState({
    country: "",
    phoneNumber: "",
  });

  const getValueInputCountry = (value: string) => {
    const valueCountry = validateCountry(value);

    setCountry(value);

    if (valueCountry) {

      setFieldError({
        ...fieldError,
        country: valueCountry,
      })
    } else {
      setFieldError({
        ...fieldError,
        country: "",
      })
    }
  }

  const getValueInputPhoneNumber = (value: string) => {
    let number = value.replaceAll(" ", "")

    const valuePhoneNumber = validatePhoneNumber(number);

    setPhone(number);

    if (valuePhoneNumber) {
      
      setFieldError({
        ...fieldError,
        phoneNumber: valuePhoneNumber,
      })
    }else {
      setFieldError({
        ...fieldError,
        phoneNumber: "",
      })
    }
  }

  const sendDataValues = () => {
    if((!phone || phone === "") && country === "") {
      setFieldError({
        country: "Country is required",
        phoneNumber: "Phone Number is required",
      })
      return 
    }


    // si estan vacios estos campos significa que no hay errores
    if(fieldError.country === "" && fieldError.phoneNumber === "") {
    var secretKey = 'b52b4f45b6e9337b57869d7cb718c693';

    const encryptedMessage = CryptoJS.AES.encrypt(phone, CryptoJS.enc.Hex.parse(secretKey), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    const encryptedHex = encryptedMessage.ciphertext.toString(CryptoJS.enc.Hex);

    const encryptedMessage2 = CryptoJS.AES.encrypt(country, CryptoJS.enc.Hex.parse(secretKey), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    const encryptedHex2 = encryptedMessage2.ciphertext.toString(CryptoJS.enc.Hex);

    localStorage.setItem("step2", JSON.stringify({encryptedHex, encryptedHex2}));

      setStepCompleted(3)
    }
  }

  return (
    <ThirdwebProvider
    // activeChain={BinanceTestnet}
    activeChain={BinanceTestnet}
    clientId="95347962d3e713129610a9c9f4dbce58"
  >
    <div className="registerTwo">
      <div>
        <div className="container-input-label">
          <label htmlFor="">{t("Phone Number")}</label>
          <PhoneInput
            defaultCountry="MX"
            placeholder="Ej: 5585264448"
            value={phone}
            onChange={(value)=> value ? getValueInputPhoneNumber(value) : null}
          />
          <p className="textErrorInput">{fieldError.phoneNumber}</p> 
        </div>
        <div className="container-input-label">
          <label htmlFor="">{t("Country")}</label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder={t("Country")}
            required
            value={country}
            onChange={(e) => getValueInputCountry(e.target.value)}
          />
          <p className="textErrorInput">{fieldError.country}</p>
        </div>
      </div>

      <div>
        <ButtonPrimary
          text={t("Continue")}
          onClickFn={() => sendDataValues()}
        />


{/*    <Web3Button
          //  contractAddress="0x0cda7c31216405d997479f3e0219a5d9f3d9909c"
          contractAddress="0xb9A0d17E8B0F5A9514Cc03D3C0fC2851b1d87E0b"
          contractAbi={abi}
          action={async (contract: any) => {
            console.log(phone)
            console.log(country)
            var secretKey = 'b52b4f45b6e9337b57869d7cb718c693';
            const encryptedMessage = CryptoJS.AES.encrypt(phone, CryptoJS.enc.Hex.parse(secretKey), {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            const encryptedHex = encryptedMessage.ciphertext.toString(CryptoJS.enc.Hex);
            const encryptedMessage2 = CryptoJS.AES.encrypt(country, CryptoJS.enc.Hex.parse(secretKey), {
              mode: CryptoJS.mode.ECB,
              padding: CryptoJS.pad.Pkcs7
          });
          const encryptedHex2 = encryptedMessage2.ciphertext.toString(CryptoJS.enc.Hex);
        
          await contract.call("storeInfo2", [encryptedHex, encryptedHex2])
            
          }}
          onSuccess={(result) => setStepCompleted(3)}
          onError={(error) => alert(`Error --> ${error.message}`)}
          className="buyMembershipClass"
        >
          {t("Continue")}
        </Web3Button>
        */}



      </div>
    </div>
    </ThirdwebProvider>
  );
};

export default RegisterTwo;
