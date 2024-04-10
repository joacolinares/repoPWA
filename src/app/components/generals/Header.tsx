import React from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import DataStakesClaims from "@/app/[locale]/(logged-in)/dashboard/components/DataStakesClaims";
import ProfileHeader from "@/app/[locale]/(logged-in)/profile/edit/components/ProfileHeader";
import MembersHeader from "@/app/[locale]/(logged-in)/members/components/MembersHeader";

type HeaderPagesProps = {
  text: string;
};

const Header = ({ text }: HeaderPagesProps) => {
  const pathname = usePathname();

  return (
    <div className="header">
      <Navbar text={text} />
      {pathname === "/dashboard" ? <DataStakesClaims /> : null}
      {pathname === "/profile" ? <ProfileHeader /> : null}
      {pathname === "/members" ? <MembersHeader /> : null}
    </div>
  );
};

export default Header;
