"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import ButtonPrimary from "../../../components/generals/ButtonPrimary";
import { validateEmail, validateFullName, validateUserName } from "@/utils/value_object_register_steps";

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

    localStorage.setItem("step1", JSON.stringify({email, fullName, username}))

    // si estan vacios estos campos significa que no hay errores
    if(fieldError.email === "" && fieldError.fullName === "" && fieldError.username === "") {
      setStepCompleted(2)
    }
  }
  
  return (
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
      </div>
    </div>
  );
};

export default RegisterOne;
