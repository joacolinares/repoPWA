"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import ButtonPrimary from "../../../components/generals/ButtonPrimary";
import { validateEmail, validateFullName, validateUserName } from "@/utils/value_object_register_steps";
import { ThirdwebProvider, Web3Button } from "@thirdweb-dev/react";
var CryptoJS = require( 'crypto-js' );
import abi from './abis/abi.json'
import './buttonStyle.css'
import {  PolygonAmoyTestnet } from "@thirdweb-dev/chains";

type Props = {
  setStepCompleted: (value: number) => void;
};

const RegisterOne = ({ setStepCompleted}: Props) => {
  const t = useTranslations();
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [fieldError, setFieldError] = useState({
    email: "",
    fullName: "",
    username: "",
  });

  function getValueInputEmail(value: string) {
      const valueEmail = validateEmail(value) 

      setEmail(value)

      if(valueEmail) {
        setFieldError({
          ...fieldError,
          email: valueEmail
        })
      } else {
        setFieldError({
          ...fieldError,
          email: ""
        })
      }
  }

  function getValueInputFullName(value: string) {
    const valueFullName = validateFullName(value) 

    setFullName(value)

    if(valueFullName) {
      setFieldError({
        ...fieldError,
        fullName: valueFullName
      })
    } else {
      setFieldError({
        ...fieldError,
        fullName: ""
      })
    }
  }

  function getValueInputUsername(value: string) {
    const valueUsername = validateUserName(value) 

    setUsername(value)

    if(valueUsername) {
      setFieldError({
        ...fieldError,
        username: valueUsername
      })
    } else {
      setFieldError({
        ...fieldError,
        username: ""
      })
    }
  }

  const sendDataValues = () => {
    let error = {
      email: "",
      fullName: "",
      username: "",
    }

    if(email === "") {
      error.email = "Email is required"
    }
    if(fullName === "" ) {
      error.fullName = "Full Name is required"
    }
    if(username === "") {
      error.username = "Username is required"
    }

    if(error.email || error.fullName || error.username) {
      setFieldError(error)
      return
    }


    // si estan vacios estos campos significa que no hay errores
    if(fieldError.email === "" && fieldError.fullName === "" && fieldError.username === "") {


      var secretKey = 'b52b4f45b6e9337b57869d7cb718c693';
      const encryptedMessage = CryptoJS.AES.encrypt(email, CryptoJS.enc.Hex.parse(secretKey), {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
      });
      const encryptedHex = encryptedMessage.ciphertext.toString(CryptoJS.enc.Hex);
      const encryptedMessage2 = CryptoJS.AES.encrypt(fullName, CryptoJS.enc.Hex.parse(secretKey), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    const encryptedHex2 = encryptedMessage2.ciphertext.toString(CryptoJS.enc.Hex);
    const encryptedMessage3 = CryptoJS.AES.encrypt(username, CryptoJS.enc.Hex.parse(secretKey), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
  });
  const encryptedHex3 = encryptedMessage3.ciphertext.toString(CryptoJS.enc.Hex);


      localStorage.setItem("step1", JSON.stringify({encryptedHex, encryptedHex2, encryptedHex3}));

      setStepCompleted(2)
    }
  }
  

 const cifrado2 = async () => {
  
  const secretMessage = 'joacolinares2003@gmail.com';
  const secretKey = 'b52b4f45b6e9337b57869d7cb718c693';

  const encryptedMessage = CryptoJS.AES.encrypt(secretMessage, CryptoJS.enc.Hex.parse(secretKey), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
  });
  const encryptedHex = encryptedMessage.ciphertext.toString(CryptoJS.enc.Hex);

  console.log('Cifrado (hexadecimal):', encryptedHex);

  const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Hex.parse(encryptedHex)
  });
  const decryptedBytes = CryptoJS.AES.decrypt(cipherParams, CryptoJS.enc.Hex.parse(secretKey), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
  });
  const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

  console.log('Descifrado (UTF-8):', decryptedMessage);
};


  return (
    <ThirdwebProvider
    // activeChain={BinanceTestnet}
    activeChain={PolygonAmoyTestnet}
    clientId="95347962d3e713129610a9c9f4dbce58"
  >
    <div className="registerOne">
      <div>
        <div className="container-input-label">
          <label htmlFor="">{t("Email Address")}</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("Email Address")}
            required
            value={email}
            onChange={(e) => getValueInputEmail(e.target.value)}
          />
          <p className="textErrorInput">{fieldError.email}</p>
        </div>
        <div className="container-input-label">
          <label htmlFor="">{t("Full Name")}</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder={t("Full Name")}
            required
            value={fullName}
            onChange={(e) => getValueInputFullName(e.target.value)}
          />
          <p className="textErrorInput">{fieldError.fullName}</p>
        </div>
        <div className="container-input-label">
          <label htmlFor="">{t("Username")}</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder={t("Username")}
            required
            value={username}
            onChange={(e) => getValueInputUsername(e.target.value)}
          />
          <p className="textErrorInput">{fieldError.username}</p>
        </div>
      </div>

      <div>
        <ButtonPrimary
          text={t("Continue")}
          onClickFn={() => sendDataValues()}
        />

{/*      <Web3Button
                //  contractAddress="0x0cda7c31216405d997479f3e0219a5d9f3d9909c"
                contractAddress="0xb9A0d17E8B0F5A9514Cc03D3C0fC2851b1d87E0b"
                contractAbi={abi}
                action={async (contract: any) => {
                  console.log(email)
                  console.log(fullName)
                  console.log(username)
                  var secretKey = 'b52b4f45b6e9337b57869d7cb718c693';
                  const encryptedMessage = CryptoJS.AES.encrypt(email, CryptoJS.enc.Hex.parse(secretKey), {
                      mode: CryptoJS.mode.ECB,
                      padding: CryptoJS.pad.Pkcs7
                  });
                  const encryptedHex = encryptedMessage.ciphertext.toString(CryptoJS.enc.Hex);
                  const encryptedMessage2 = CryptoJS.AES.encrypt(fullName, CryptoJS.enc.Hex.parse(secretKey), {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                });
                const encryptedHex2 = encryptedMessage2.ciphertext.toString(CryptoJS.enc.Hex);
                const encryptedMessage3 = CryptoJS.AES.encrypt(username, CryptoJS.enc.Hex.parse(secretKey), {
                  mode: CryptoJS.mode.ECB,
                  padding: CryptoJS.pad.Pkcs7
              });
              const encryptedHex3 = encryptedMessage3.ciphertext.toString(CryptoJS.enc.Hex);
              
                    await contract.call("storeInfo1", [encryptedHex, encryptedHex2,encryptedHex3])
                  
                }}
                onSuccess={(result) => setStepCompleted(2)}
                onError={(error) => alert(`Error --> ${error.message}`)}
                className="buyMembershipClass"
              >
                {t("Continue")}
              </Web3Button>*/}
      </div>
    </div>
    </ThirdwebProvider>
  );
};

export default RegisterOne;
