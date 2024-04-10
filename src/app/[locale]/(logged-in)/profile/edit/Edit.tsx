"use client";
import { useTranslations } from "next-intl";
import React, { use, useCallback, useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import { E164Number } from "libphonenumber-js/core"; // esto solo es tipado
import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import { UserRegisterState, useUserRegisterStore } from "@/store/user-register";
import {
  validateCountry,
  validateDateOfBirth,
  validateEmail,
  validateFullName,
  validateGender,
  validatePhoneNumber,
  validateUserName,
} from "@/utils/value_object_register_steps";
import { useRouter } from "next/navigation";

const EditProfile = () => {
  const t = useTranslations();
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<E164Number | undefined>();
  const [country, setCountry] = useState<string>("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fieldError, setFieldError] = useState({
    email: "",
    fullName: "",
    username: "",
    country: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
  });

  //este useEffect solo lo utilizare hasta hacer el fetch de datos real
  const getUserRegisterStore = useCallback(useUserRegisterStore, []);
  const userStore = getUserRegisterStore()
  const router = useRouter()
  
  useEffect(() => {
    setEmail(userStore.email || "")
    setFullName(userStore.fullName || "")
    setUsername(userStore.username || "")
    setPhone(userStore.phoneNumber || "")
    setCountry(userStore.country || "")
    setGender(userStore.gender || "")
    setDateOfBirth(userStore.dateOfBirth || "")

  }, [getUserRegisterStore]);

  function getValueInputEmail(value: string) {
    const valueEmail = validateEmail(value);

    setEmail(value);

    if (valueEmail) {
      setFieldError({
        ...fieldError,
        email: valueEmail,
      });
    } else {
      setFieldError({
        ...fieldError,
        email: "",
      });
    }
  }

  function getValueInputFullName(value: string) {
    const valueFullName = validateFullName(value);

    setFullName(value);

    if (valueFullName) {
      setFieldError({
        ...fieldError,
        fullName: valueFullName,
      });
    } else {
      setFieldError({
        ...fieldError,
        fullName: "",
      });
    }
  }

  function getValueInputUsername(value: string) {
    const valueUsername = validateUserName(value);

    setUsername(value);

    if (valueUsername) {
      setFieldError({
        ...fieldError,
        username: valueUsername,
      });
    } else {
      setFieldError({
        ...fieldError,
        username: "",
      });
    }
  }

  const getValueInputCountry = (value: string) => {
    const valueCountry = validateCountry(value);

    setCountry(value);

    if (valueCountry) {
      setFieldError({
        ...fieldError,
        country: valueCountry,
      });
    } else {
      setFieldError({
        ...fieldError,
        country: "",
      });
    }
  };

  const getValueInputPhoneNumber = (value: string) => {
    let number = value.replaceAll(" ", "");

    const valuePhoneNumber = validatePhoneNumber(number);

    setPhone(number);

    if (valuePhoneNumber) {
      setFieldError({
        ...fieldError,
        phoneNumber: valuePhoneNumber,
      });
    } else {
      setFieldError({
        ...fieldError,
        phoneNumber: "",
      });
    }
  };

  const getValueInputGender = (value: string) => {
    const valueGender = validateGender(value);

    setGender(value);

    if (valueGender) {
      setFieldError({
        ...fieldError,
        gender: valueGender,
      });
    } else {
      setFieldError({
        ...fieldError,
        gender: "",
      });
    }
  };

  const getValueInputDateOfBirth = (value: string) => {
    const valueDateOfBirth = validateDateOfBirth(value);
    setDateOfBirth(value);

    if (valueDateOfBirth) {
      setFieldError({
        ...fieldError,
        dateOfBirth: valueDateOfBirth,
      });
    } else {
      setFieldError({
        ...fieldError,
        dateOfBirth: "",
      });
    }
  };

  const { updateUser, ...user } = useUserRegisterStore();

  const handleSubmit = () => {
    if(
        fieldError.country !== "" || 
        fieldError.phoneNumber !== "" || 
        fieldError.email !== "" || 
        fieldError.fullName !== "" || 
        fieldError.username !== "" || 
        fieldError.gender !== "" || 
        fieldError.dateOfBirth !== ""
    ) return 

    const newObject: UserRegisterState = {
    email,
    fullName,
    username,
    phoneNumber: phone || null,
    country,
    gender,
    dateOfBirth
    }

    updateUser(newObject)
    router.push("/profile")
  }

  return (
    <div className="edit-profile">
      <h1 className="title-edit">{t("Edit your profile")}</h1>
      <form className="container-form">
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
        <div className="container-input-label">
          <label htmlFor="">{t("Phone Number")}</label>
          <PhoneInput
            defaultCountry="MX"
            placeholder="Ej: 5585264448"
            value={phone}
            onChange={(value) =>
              value ? getValueInputPhoneNumber(value) : null
            }
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
            <option value={t("Women")}>{t("Women")}</option>
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
      </form>
      <div>
        <ButtonPrimary text={t("Save changes")}  onClickFn={handleSubmit} />
      </div>
    </div>
  );
};

export default EditProfile;
