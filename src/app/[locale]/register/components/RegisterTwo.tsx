"use client";
import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core"; // esto solo es tipado
import { validatePhoneNumber, validateCountry } from "@/utils/value_object_register_steps";

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

    localStorage.setItem("step2", JSON.stringify({country, phone}))

    // si estan vacios estos campos significa que no hay errores
    if(fieldError.country === "" && fieldError.phoneNumber === "") {
      setStepCompleted(3)
    }
  }

  return (
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
      </div>
    </div>
  );
};

export default RegisterTwo;
