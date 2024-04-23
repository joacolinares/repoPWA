"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  dataLevelsMock,
  DataMembers,
} from "@/app/[locale]/(logged-in)/members/components/moskData";
import { useRouter } from "next/navigation";
import { useUserLevelStore } from "@/store/user-level";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {  PolygonAmoyTestnet } from "@thirdweb-dev/chains";
import { useAddress } from "@thirdweb-dev/react";
import abi from './abis/abi.json'


async function fetchServerDataMember(): Promise<DataMembers[]> {
    const data = dataLevelsMock
    return data
}

const MyMembersTeam = () => {
  const t = useTranslations();
  const router = useRouter();
  const [dataLevels, setDataLevels] = useState<DataMembers[]>([]);
  const { selectPlan, ...lvlStore  } = useUserLevelStore();



  const [levelOne, setLevelOne] = useState(0)
  const [levelTwo, setLevelTwo] = useState(0)
  const [levelThree, setLevelThree] = useState(0)
  const [levelFour, setLevelFour] = useState(0)


  const [levelOne2, setLevelOne2] = useState(0)
  const [levelTwo2, setLevelTwo2] = useState(0)
  const [levelThree2, setLevelThree2] = useState(0)
  const [levelFour2, setLevelFour2] = useState(0)

  const address = useAddress()

  const loadInfo = async() =>{
    const sdk = new ThirdwebSDK(PolygonAmoyTestnet);
    const contract = await sdk.getContract(
      "0x3D7593DAD82286c3e4CD56925f45F58278BB477c", 
      abi,
    );
    if(address != undefined){
      const levelOne = await contract.call(
        "levelOne", 
        [address]
      );
      const levelTwo = await contract.call(
        "levelTwo", 
        [address]
      );
      const levelThree = await contract.call(
        "levelThree", 
        [address]
      );
      const levelFour = await contract.call(
        "levelFour", 
        [address]
      );

      setLevelOne(parseInt(levelOne[0]._hex,16) / 1000000000000000000)
      setLevelTwo(parseInt(levelTwo[0]._hex,16) / 1000000000000000000)
      setLevelThree(parseInt(levelThree[0]._hex,16) / 1000000000000000000)
      setLevelFour(parseInt(levelFour[0]._hex,16) / 1000000000000000000)
      
      setLevelOne2(parseInt(levelOne[1]._hex,16))
      setLevelTwo2(parseInt(levelTwo[1]._hex,16))
      setLevelThree2(parseInt(levelThree[1]._hex,16))
      setLevelFour2(parseInt(levelFour[1]._hex,16))



    }
  }

	useEffect(() => {
		async function getDataServer() {
			const data = await fetchServerDataMember()
			setDataLevels(data)
		}

		getDataServer()
	}, []);


  useEffect(() => {
    loadInfo()
  }, [address])

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
          <div
            key={0}
            //onClick={() => getLevel(item)}
            className="cursor-pointer py-[16px] last:pb-0 first:pt-0 border-solid border-b-[1px] border-[#ffffff1a] last:border-b-0 flex items-center justify-between"
          >
            <div className="container-level">
              <h3 className="text-[14px] font-bold text-[#20DABB]">
                {t("LEVEL")} 1
              </h3>
              <p className="text-[16px] font-bold mt-2">
                {levelOne2} {t("Members")}{" "}
              </p>
            </div>
            <div className="container-total-residual">
              <div className="container-total mb-4">
                <p className="text-[12px] mb-2">{t("TOTAL MEMBERSHIP")}</p>
                <p className="text-[16px] font-bold">$ {levelOne}</p>
              </div>
             {/* <div className="container-residual">
                <p className="text-[12px] mb-2">{t("REWARDS")} (10%)</p>
                <p className="text-[16px] font-bold">$ 4</p>
                  </div>*/}
            </div>
          </div>
      </div>




      <div className="container-levels p-4 rounded-2xl bg-[#ffffff14] ">
          <div
            key={0}
            //onClick={() => getLevel(item)}
            className="cursor-pointer py-[16px] last:pb-0 first:pt-0 border-solid border-b-[1px] border-[#ffffff1a] last:border-b-0 flex items-center justify-between"
          >
            <div className="container-level">
              <h3 className="text-[14px] font-bold text-[#20DABB]">
                {t("LEVEL")} 2
              </h3>
              <p className="text-[16px] font-bold mt-2">
                {levelTwo2} {t("Members")}{" "}
              </p>
            </div>
            <div className="container-total-residual">
              <div className="container-total mb-4">
                <p className="text-[12px] mb-2">{t("TOTAL MEMBERSHIP")}</p>
                <p className="text-[16px] font-bold">$ {levelTwo}</p>
              </div>
             {/* <div className="container-residual">
                <p className="text-[12px] mb-2">{t("REWARDS")} (10%)</p>
                <p className="text-[16px] font-bold">$ 4</p>
                  </div>*/}
            </div>
          </div>
      </div>



      <div className="container-levels p-4 rounded-2xl bg-[#ffffff14] ">
          <div
            key={0}
            //onClick={() => getLevel(item)}
            className="cursor-pointer py-[16px] last:pb-0 first:pt-0 border-solid border-b-[1px] border-[#ffffff1a] last:border-b-0 flex items-center justify-between"
          >
            <div className="container-level">
              <h3 className="text-[14px] font-bold text-[#20DABB]">
                {t("LEVEL")} 3
              </h3>
              <p className="text-[16px] font-bold mt-2">
                {levelThree2} {t("Members")}{" "}
              </p>
            </div>
            <div className="container-total-residual">
              <div className="container-total mb-4">
                <p className="text-[12px] mb-2">{t("TOTAL MEMBERSHIP")}</p>
                <p className="text-[16px] font-bold">$ {levelThree}</p>
              </div>
             {/* <div className="container-residual">
                <p className="text-[12px] mb-2">{t("REWARDS")} (10%)</p>
                <p className="text-[16px] font-bold">$ 4</p>
                  </div>*/}
            </div>
          </div>
      </div>



      <div className="container-levels p-4 rounded-2xl bg-[#ffffff14] ">
          <div
            key={0}
            //onClick={() => getLevel(item)}
            className="cursor-pointer py-[16px] last:pb-0 first:pt-0 border-solid border-b-[1px] border-[#ffffff1a] last:border-b-0 flex items-center justify-between"
          >
            <div className="container-level">
              <h3 className="text-[14px] font-bold text-[#20DABB]">
                {t("LEVEL")} 4
              </h3>
              <p className="text-[16px] font-bold mt-2">
                {levelFour2} {t("Members")}{" "}
              </p>
            </div>
            <div className="container-total-residual">
              <div className="container-total mb-4">
                <p className="text-[12px] mb-2">{t("TOTAL MEMBERSHIP")}</p>
                <p className="text-[16px] font-bold">$ {levelFour}</p>
              </div>
             {/* <div className="container-residual">
                <p className="text-[12px] mb-2">{t("REWARDS")} (10%)</p>
                <p className="text-[16px] font-bold">$ 4</p>
                  </div>*/}
            </div>
          </div>
      </div>


    </div>
  );
};

export default MyMembersTeam;
