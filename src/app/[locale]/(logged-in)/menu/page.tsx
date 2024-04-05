"use client";
import React from "react";
import RewardPoolIcon from "@/assets/icons/RewardPoolIcon.svg";
import MembersIcon from "@/assets/icons/membersIcon.svg";
import OperationsIcon from "@/assets/icons/operationsIcon.svg";
import TransactionsIcon from "@/assets/icons/transactionsIcon.svg";
import GovernanceIcon from "@/assets/icons/governanceIcon.svg";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SvgIcon extends React.FC<React.SVGProps<SVGSVGElement>> {}
interface ListMenu {
  title: string;
  icon: SvgIcon;
  link: string;
}

const MenuPage = () => {
  const t = useTranslations();
  const router = useRouter();

  const listMenu: ListMenu[] = [
    {
      title: t("Reward Pool"),
      icon: RewardPoolIcon,
      link: "/reward-pool",
    },
    {
      title: t("Members"),
      icon: MembersIcon,
      link: "/members",
    },
    {
      title: t("Operations"),
      icon: OperationsIcon,
      link: "/operations",
    },
    {
      title: t("Transactions"),
      icon: TransactionsIcon,
      link: "/transactions",
    },
    {
      title: t("Governance"),
      icon: GovernanceIcon,
      link: "/governance",
    },
  ];

  return (
    <div className="menu-page">
      {listMenu.map((item, index) => (
        <div
          key={index}
          className="menu-page-item"
          onClick={() => router.push(item.link)}
        >
            <div className="container-img">
                <Image src={item.icon} alt="icon" width={22} height={22} />
            </div>
          

          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
