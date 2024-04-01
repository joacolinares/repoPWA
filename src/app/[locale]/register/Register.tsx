"use client";
import RegisterOne from "./components/RegisterOne";
import RegisterTwo from "./components/RegisterTwo";
import RegisterThree from "./components/RegisterThree";
import HeaderRegister from "@/app/components/register/HeaderRegister";
import { useState } from "react";

export default function Register() {
  const [stepCompleted, setStepCompleted] = useState(1);

  const handleStep = (value: number) => {
    setStepCompleted(value);
  };

  return (
    <>
      <HeaderRegister step={stepCompleted} />
      {stepCompleted === 1 && (
        <RegisterOne setStepCompleted={handleStep} />
      )}
      {stepCompleted === 2 && (
        <RegisterTwo setStepCompleted={handleStep}/>
      )}
      {stepCompleted === 3 && <RegisterThree />}
    </>
  );
}