"use client";

import Footer from "../generals/Footer";
import Navbar from "../generals/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: Props) {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-hidden">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}
