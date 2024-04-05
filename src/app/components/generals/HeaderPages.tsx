import React from "react";
import ContainerLanguage from "./ContainerLanguage";
import NotificationsSVG from "@/assets/icons/NotificationsIcon";
import GoBack from "./GoBack";
import { useRouter } from "next/navigation";

type HeaderPagesProps = {
  text: string;
};

const HeaderPages = ({ text }: HeaderPagesProps) => {
  const router = useRouter();

  return (
    <div className="headerPage">
      <GoBack text={text} />

      <div className="container-language-notifications">
        <ContainerLanguage />
        <NotificationsSVG fill="#fff" width={24} height={24} onClick={() => router.push('/notifications')}/>
      </div>
    </div>
  );
};

export default HeaderPages;
