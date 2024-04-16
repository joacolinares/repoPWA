"use client";
import Footer from "../generals/Footer";

interface Props {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: Props) {

  return (
    <div className="flex flex-col justify-between  overflow-hidden">
      <div>
        {children}
      </div>

      <Footer />
    </div>
  );
}
