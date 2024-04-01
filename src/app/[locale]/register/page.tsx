import React from "react";
import { Metadata } from "next";
import Register from "./Register";

export const metadata: Metadata = {
  title: "Registrarse - Defily",
};

export default async function RegisterPage() {
  return (
    <div className="page-register">
      <Register />
    </div>
  );
}
