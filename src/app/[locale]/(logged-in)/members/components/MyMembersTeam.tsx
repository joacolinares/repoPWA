"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  dataLevelsMock,
  DataMembers,
} from "@/app/[locale]/(logged-in)/members/components/moskData";
import { useRouter } from "next/navigation";
import { useUserLevelStore } from "@/store/user-level";

async function fetchServerDataMember(): Promise<DataMembers[]> {
    const data = dataLevelsMock
    return data
}

const MyMembersTeam = () => {
  const t = useTranslations();
  const router = useRouter();
  const [dataLevels, setDataLevels] = useState<DataMembers[]>([]);
  const { selectPlan, ...lvlStore  } = useUserLevelStore();

	useEffect(() => {
		async function getDataServer() {
			const data = await fetchServerDataMember()
			setDataLevels(data)
		}

		getDataServer()
	}, []);

  const getLevel = (level: DataMembers) => {
    if (level) {
        selectPlan(level);
      router.push(`/members/levelMember/level${level.level}`);
    }
  };

  return (
    <div className="component-MyMembersTeam mt-[32px] px-[24px] pt-[32px] pb-[96px] rounded-t-[40px] rounded-b-none bg-gradient-to-r from-[#0E0E33] to-[#39307B] text-white">
      <h1 className="text-[20px] font-bold mb-2">{t("My Members Team")}</h1>
      <p className="text-[14px] mb-6">{t("Tap on each one to see more")}</p>

      <div className="container-levels p-4 rounded-2xl bg-[#ffffff14] ">
        {dataLevels.map((item) => (
          <div
            key={item.level}
            onClick={() => getLevel(item)}
            className="cursor-pointer py-[16px] last:pb-0 first:pt-0 border-solid border-b-[1px] border-[#ffffff1a] last:border-b-0 flex items-center justify-between"
          >
            <div className="container-level">
              <h3 className="text-[14px] font-bold text-[#20DABB]">
                {t("LEVEL")} {item.level}
              </h3>
              <p className="text-[16px] font-bold mt-2">
                {item.membersInfo?.length} {t("Members")}{" "}
              </p>
            </div>
            <div className="container-total-residual">
              <div className="container-total mb-4">
                <p className="text-[12px] mb-2">{t("TOTAL MEMBERSHIP")}</p>
                <p className="text-[16px] font-bold">$ {item.totalStaking}</p>
              </div>
              <div className="container-residual">
                <p className="text-[12px] mb-2">{t("REWARDS")} (10%)</p>
                <p className="text-[16px] font-bold">$ {item.totalStaking}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMembersTeam;
