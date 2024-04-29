import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import { validateDateOfBirth, validateGender } from "@/utils/value_object_register_steps";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {UserRegisterState, useUserRegisterStore} from "@/store/user-register"
import { ThirdwebProvider, Web3Button } from "@thirdweb-dev/react";
var CryptoJS = require( 'crypto-js' );
import abi from './abis/abi.json'
import './buttonStyle.css'
import {  BinanceTestnet } from "@thirdweb-dev/chains";


const RegisterThree = () => {
  const t = useTranslations();
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fieldError, setFieldError] = useState({
    gender: "",
    dateOfBirth: ""
  });

  const router = useRouter();

  const { updateUser, ...user } = useUserRegisterStore();

  const getValueInputGender = (value: string) => {
    const valueGender = validateGender(value);

    setGender(value);

    if (valueGender) {

      setFieldError({
        ...fieldError,
        gender: valueGender,
      })
    } else {
      setFieldError({
        ...fieldError,
        gender: "",
      })
    }
  }

  const getValueInputDateOfBirth = (value: string) => {
    const valueDateOfBirth = validateDateOfBirth(value);
    setDateOfBirth(value);

    if (valueDateOfBirth) {

      setFieldError({
        ...fieldError,
        dateOfBirth: valueDateOfBirth,
      })
    } else {
      setFieldError({
        ...fieldError,
        dateOfBirth: "",
      })
    }
  }

  const sendDataValues = () => {
    if( gender === "" && dateOfBirth === "") {
      setFieldError({
        gender: "Gender is required",
        dateOfBirth: "Date of Birth is required",
      })
      return 
    }

    if(localStorage.getItem("step1") && localStorage.getItem("step2")) { 
      const step1 = JSON.parse(localStorage.getItem("step1")!);
      const step2 = JSON.parse(localStorage.getItem("step2")!);

      const newUser: UserRegisterState = {
        email: step1.email.trim(),
        fullName: step1.fullName.trim(),
        username: step1.username.trim(),
        country: step2.country.trim(),
        phoneNumber: step2.phone.trim(),
        gender: gender.trim(),
        dateOfBirth: dateOfBirth.trim()
      }
      updateUser(newUser)
      localStorage.removeItem("step1");
      localStorage.removeItem("step2");
    }

    // si estan vacios estos campos significa que no hay errores
    if(fieldError.gender === "" && fieldError.dateOfBirth === "") {
     
          const currentUrl = window.location.href;
            const queryStringIndex = currentUrl.indexOf("?");
            if (queryStringIndex !== -1) {
              const queryString = currentUrl.slice(queryStringIndex + 1);
              const params = new URLSearchParams(queryString);
              const referralWallet = params.get("refferalWallet");
              console.log(referralWallet)
              if (referralWallet) {
                router.push(`/knowOurTerms?refferalWallet=${referralWallet}`);
              }else{
                router.push(`/knowOurTerms?refferalWallet=0x0000000000000000000000000000000000000123`);
              }
            } else{
              router.push("/knowOurTerms?refferalWallet=0x0000000000000000000000000000000000000123")
            }
     
     
    }
  }

  return (
    <ThirdwebProvider
    // activeChain={BinanceTestnet}
    activeChain={BinanceTestnet}
    clientId="95347962d3e713129610a9c9f4dbce58"
  >
    <div className="registerThree">
      <div>
        <div className="container-input-label">
          <label htmlFor="">{t("Gender")}</label>
          <select
            aria-label="Default select example"
            className="selectGender form-control"
            id="inputGender"
            value={gender}
            onChange={(e) => getValueInputGender(e.target.value)}
          >
            <option value={t("Gender")}>{t("Gender")}</option>
            <option value={t("Man")}>{t("Man")}</option>
            <option value={t("Woman")}>{t("Woman")}</option>   
            <option value={t("I prefer not to say")}>
              {t("I prefer not to say")}
            </option>
          </select>
          <p className="textErrorInput">{fieldError.gender}</p>
        </div>
        <div className="container-input-label">
          <label htmlFor="">{t("Date of Birth")}</label>
          <input
            type="date"
            name="username"
            id="username"
            placeholder={t("Select your Date of Birth")}
            required
            value={dateOfBirth}
            onChange={(e) => getValueInputDateOfBirth(e.target.value)}
          />
          <p className="textErrorInput">{fieldError.dateOfBirth}</p>
        </div>
      </div>

      <div>
        {/*<ButtonPrimary text={t("Get started")!} onClickFn={sendDataValues}/>*/}


        <Web3Button
          //  contractAddress="0x0cda7c31216405d997479f3e0219a5d9f3d9909c"
          contractAddress="0xCe64023d7847f5b77d91520514106F52f10C9524"
          contractAbi={abi}
          action={async (contract: any) => {
            console.log(gender)
            console.log(dateOfBirth)
            var secretKey = 'b52b4f45b6e9337b57869d7cb718c693';



            const storedData = localStorage.getItem("step1");
            const parsedData = storedData ? JSON.parse(storedData) : { /* valores por defecto */ };
            
            const storedData2 = localStorage.getItem("step2");
            const parsedData2 = storedData2 ? JSON.parse(storedData2) : { /* valores por defecto */ };

            console.log(parsedData)


            const encryptedMessage = CryptoJS.AES.encrypt(gender, CryptoJS.enc.Hex.parse(secretKey), {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            const encryptedHex = encryptedMessage.ciphertext.toString(CryptoJS.enc.Hex);
            const encryptedMessage2 = CryptoJS.AES.encrypt(dateOfBirth, CryptoJS.enc.Hex.parse(secretKey), {
              mode: CryptoJS.mode.ECB,
              padding: CryptoJS.pad.Pkcs7
          });
          const encryptedHex2 = encryptedMessage2.ciphertext.toString(CryptoJS.enc.Hex);
        
          await contract.call("storeInfo", [parsedData.encryptedHex,parsedData.encryptedHex2,parsedData.encryptedHex3,parsedData2.encryptedHex,parsedData2.encryptedHex2,encryptedHex, encryptedHex2])
            
          }}
          onSuccess={(result) => {

            const currentUrl = window.location.href;
            const queryStringIndex = currentUrl.indexOf("?");
            if (queryStringIndex !== -1) {
              const queryString = currentUrl.slice(queryStringIndex + 1);
              const params = new URLSearchParams(queryString);
              const referralWallet = params.get("refferalWallet");
              console.log(referralWallet)
              if (referralWallet) {
                router.push(`/knowOurTerms?refferalWallet=${referralWallet}`);
              }else{
                router.push(`/knowOurTerms?refferalWallet=0x0000000000000000000000000000000000000123`);
              }
            } else{
              router.push("/knowOurTerms?refferalWallet=0x0000000000000000000000000000000000000123")
            }


          }}
          onError={(error) => alert(`Error --> ${error.message}`)}
          className="buyMembershipClass"
        >
          {t("Continue")}
        </Web3Button>


      </div>
    </div>
    </ThirdwebProvider>
  );
};

export default RegisterThree;
