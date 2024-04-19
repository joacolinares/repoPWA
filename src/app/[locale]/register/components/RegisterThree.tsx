import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import { validateDateOfBirth, validateGender } from "@/utils/value_object_register_steps";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {UserRegisterState, useUserRegisterStore} from "@/store/user-register"

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
      router.push("/knowOurTerms")
    }
  }

  return (
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
        <ButtonPrimary text={t("Get started")!} onClickFn={sendDataValues}/>
      </div>
    </div>
  );
};

export default RegisterThree;
