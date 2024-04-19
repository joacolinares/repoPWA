"use client";
import React from "react";
import RewardPoolIcon from "@/assets/icons/RewardPoolIcon.svg";
import MembersIcon from "@/assets/icons/membersIcon.svg";
import OperationsIcon from "@/assets/icons/operationsIcon.svg";
import TransactionsIcon from "@/assets/icons/transactionsIcon.svg";
import GovernanceIcon from "@/assets/icons/governanceIcon.svg";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import HeaderPages from "@/app/components/generals/HeaderPages";
import Link from "next/link";

interface SvgIcon extends React.FC<React.SVGProps<SVGSVGElement>> {}
interface ListMenu {
  title: string;
  icon: SvgIcon;
  link: string;
}

const MenuPage = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const listMenu: ListMenu[] = [
    {
      title: t("Reward Pool"),
      icon: RewardPoolIcon,
      link: "/rewardPool",
    },
    {
      title: t("Members"),
      icon: MembersIcon,
      link: "/members",
    },
    {
      title: t("Operations"),
      icon: OperationsIcon,
      link: "/operations?type=claim",
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
    <>
      <HeaderPages
        text={pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
      />
      <div className="menu-page bg-gradient-to-t from-[#0E0E33] to-[#39307B]">
        {listMenu.map((item, index) => (
          <Link href={item.link}
            key={index}
            className="menu-page-item cursor-pointer"
          >
            <div className="container-img">
              <Image src={item.icon} alt="icon" width={22} height={22} />
            </div>

            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MenuPage;
