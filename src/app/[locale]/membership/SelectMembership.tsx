"use client";
import Image from "next/image";
import IconLogo from "@/assets/imgs/LogoTipoPeq.png";
import { useTranslations } from "next-intl";
import ButtonSecondary from "@/app/components/generals/ButtonSecondary";
import CheckIcon from "@/assets/icons/CheckIcon";
import CloseIcon from "@/assets/icons/CloseIcon";
import { useEffect, useState } from "react";
import ModalComponent from "@/app/components/generals/ModalComponent";
import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import { usePathname, useRouter } from "next/navigation";
import { useUserPlanStore } from "@/store/user-plan";
import Navbar from "@/app/components/generals/Navbar";
import ProcessingIcon from "@/assets/imgs/processingGifModal.gif";
import CheckDone from "@/assets/icons/checkDone.svg";
import {  BinanceTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider, ThirdwebSDK, Web3Button } from "@thirdweb-dev/react";
import abi from './abis/abi.json'
import abiToken from './abis/abiToken.json'
import { ethers } from "ethers";
import './buttonStyle.css'
interface Props {
  dataPlans: PlansMembership[];
}

interface PlansMembership {
  plan: string;
  price: string;
  profitReferralsMembership: number;
  profitReferralsEarnings: number;
  // Agrega otras propiedades según sea necesario
}







const SelectMembership = () => {
  const t = useTranslations();
  const [selectedPlan, setSelectedPlan] = useState<PlansMembership | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalProcessingOpen, setIsModalProcessingOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [aprobado, setAprobado] = useState(false)
  const router = useRouter();
  const pathname = usePathname();
  const [selectedPlanNumber, setSelectedPlanNumber] = useState(0)
  const { updatePlan } = useUserPlanStore();
    const [membresias, setMembresias] = useState<{ data: PlansMembership[]; status: boolean }>({
      data: [],
      status: false
    })
    const [actualCode, setActualCode] = useState<string | null>(null);



  const handleSelectPlan = (plan: string, index: number): void => {
    index = index + 1
    console.log(index)
     if(index == 1){
       setSelectedPlanNumber(1);
      }else if(index == 2){
        setSelectedPlanNumber(2);
     }else if(index == 3){
      setSelectedPlanNumber(3);
   }else if(index == 4){
    setSelectedPlanNumber(4);
  }else if(index == 5){
    setSelectedPlanNumber(5);
 }
  console.log(plan)
 const findPlan = membresias.data.find((p) => p.price === plan);
 console.log(findPlan)
 if (findPlan) {
   setSelectedPlan(findPlan);
   //updatePlan(findPlan);
 }

  };

  const confirmMembership = () => {
  console.log("a")
   
      setIsModalProcessingOpen(true);
      setIsProcessing(true);

      setTimeout(() => {
        setIsProcessing(false);
       // setIsModalProcessingOpen(false);
      }, 2000);
      setTimeout(() => {
        setIsModalProcessingOpen(false);
        // router.push("/dashboard");
      }, 3000);
  };

  const confirmMembership2 = () => {
   // if (selectedPlan) {
      setIsModalProcessingOpen(true);
      setIsProcessing(true);

      setTimeout(() => {
        setIsProcessing(false);
      }, 2000);

      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
   // }
  };

  const upgradePlan = () => {
    if (selectedPlan) {
      setIsModalProcessingOpen(true);
      setIsProcessing(true);

      setTimeout(() => {
        setIsProcessing(false);
      }, 5000);

      setTimeout(() => {
        router.push("/members");
      }, 6000);
    }
  };

  const headerText = pathname.includes("/")
    ? pathname
        .split("/")
        .filter((path) => path.length > 0 && path !== "/")[0]
        .charAt(0)
        .toUpperCase() +
      pathname
        .split("/")
        .filter((path) => path.length > 0 && path !== "/")[0]
        .slice(1)
    : pathname.charAt(0).toUpperCase() + pathname.slice(1);



    const llamadoMembresias = async() =>{
      console.log("Llamado")
      const sdk = new ThirdwebSDK(BinanceTestnet);
      const contract = await sdk.getContract(
        "0xbd42850F0Cca688e6D47FAA22Fd2f38ed1966ba7", 
        abi,
      );
      const memberships = await contract.call(
        "memberships", 
        [0]
      );
        console.log(memberships)
        let membresiaTemporal:any = []
        try {
          for (let i = 0; i < 10; i++) {
            const memberships = await contract.call(
              "memberships", 
              [i]
            );
            console.log(memberships)
            console.log(i)
           console.log(parseInt(memberships.membershipAmount._hex,16))
            membresiaTemporal.push(
              {
                plan: memberships.membershipTitle,
                price: ethers.utils.formatEther(memberships.membershipAmount._hex),
                profitReferralsMembership: 3,
                profitReferralsEarnings: 3,
            }
            )
          }
        
        } catch (error) {
         console.log("Error")
        }
        console.log(membresiaTemporal)
        setMembresias({
          data: membresiaTemporal,
          status: true
        })
      }
      useEffect(() => {
        llamadoMembresias()

        const currentUrl = window.location.href;
        const queryStringIndex = currentUrl.indexOf("?");
        if (queryStringIndex !== -1) {
          const queryString = currentUrl.slice(queryStringIndex + 1);
          const params = new URLSearchParams(queryString);
          const referralWallet = params.get("refferalWallet");
          console.log(referralWallet)
          if (referralWallet) {
            setActualCode(referralWallet);
          }else{
            setActualCode(referralWallet);
          }
        } else{
          setActualCode("0x0000000000000000000000000000000000000123");
        }

      }, [])






  return (
    <ThirdwebProvider
      // activeChain={BinanceTestnet}
      activeChain={BinanceTestnet}
      clientId="95347962d3e713129610a9c9f4dbce58"
    >
    <div className={`container-Membership`}>
      <div className="header">
        {pathname !== "/membership" ? (
          <div>
            <Navbar text={headerText} />
          </div>
        ) : (
          <div className="header-logo">
            <Image src={IconLogo} alt="logo" width={28} height={24} />
          </div>
        )}

        <div className="header-title">
          <h1>{t("Select your Membership")}!</h1>
          <p>{t("textSelectMembership")}.</p>
        </div>
      </div>

      <div className="container-members">
      {membresias.status ?
      <>
      {membresias.data.slice(1).map((plan,index) => (
          <div className="container-plan" key={plan.plan}>
            <div className="container-left">
              <h1 className="plan-title">{plan.plan}</h1>
              <div className="container-btn">
                <ButtonSecondary
                  text={t("See more")}
                  classname="--btnMember"
                  onClickFn={() => {
                    handleSelectPlan(plan.price,index);
                    setIsModalOpen(true);
                  }}
                />
              </div>

              {plan.plan === "Essential" ? (
                <p className="text-etiqueta">{t("MOST POPULAR")}</p>
              ) : plan.plan === "Premium" ? (
                <p className="text-etiqueta">{t("BEST VALUE")}</p>
              ) : null}
            </div>
            <div className="container-right">
              <p className="plan-price">{plan.price}</p>
              <div
                onClick={() => handleSelectPlan(plan.price,index)}
                className="container-check"
              >
                {selectedPlan?.price === plan.price && <CheckIcon />}
              </div>
            </div>
          </div>
        ))}
        </>: <>Cargando membresias...</>}
        <ModalComponent
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          classBody="bg-white w-[320px] h-auto rounded-xl"
        >
          <div className="container-modal">
            <div className="p-[24px] bg-[#7A2FF4] rounded-tl-xl rounded-tr-xl flex justify-center items-center text-[#FFFFFF]">
              <p className="font-bold text-[20px] mr-2">{selectedPlan?.plan}</p>
              <p className="text-[16px]">$ {selectedPlan?.price}</p>
            </div>
            <div className="p-[24px] ">
              <div className="rounded-[10px] bg-[#F2F3F8] flex justify-between items-center p-[8px]">
                <p className="text-[#1E0E39] font-bold text-[14px]">
                  {t("Personalized referral link")}
                </p>
                <div className="container-check bg-[#7A2FF4] rounded-[10px] w-[48px] h-[34px] flex justify-center items-center">
                  {selectedPlan?.plan === "Basic" ? (
                    <CloseIcon />
                  ) : (
                    <CheckIcon />
                  )}
                </div>
              </div>
              <div className="rounded-[10px] bg-[#F2F3F8] flex justify-between items-center p-[8px] my-[24px]">
                <p className="text-[#1E0E39] font-bold text-[14px]">
                  {t("Profit from referrals membership")}
                </p>
                <div className="container-check bg-[#7A2FF4] rounded-[10px] w-[48px] h-[34px] flex justify-center items-center">
                  <span className="text-[14px] text-[#ffffff]">
                    {selectedPlan?.profitReferralsMembership}
                  </span>
                </div>
              </div>
              <div className="rounded-[10px] bg-[#F2F3F8] flex justify-between items-center p-[8px]">
                <p className="text-[#1E0E39] font-bold text-[14px]">
                  {t("Profit from referrals earnings")}
                </p>
                <div className="container-check bg-[#7A2FF4] rounded-[10px] w-[48px] h-[34px] flex justify-center items-center">
                  <span className="text-[14px] text-[#ffffff]">
                    {selectedPlan?.profitReferralsEarnings}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ModalComponent>
      </div>

      <div
        className={`px-[24px] ${
          pathname === "/membership" ? "mb-6" : "mb-[90px]"
        }`}
      >
        {
        /*
        pathname === "/membership" ? (
          <ButtonPrimary text={t("Confirm")} onClickFn={confirmMembership} />
        ) : (
          <ButtonPrimary text={t("Upgrade")} onClickFn={upgradePlan} />
        )
        
        */
        }
  <center><p>Wallet referido actual: {actualCode}</p></center>
{
          aprobado
          ?
          <Web3Button
          //  contractAddress="0x0cda7c31216405d997479f3e0219a5d9f3d9909c"
          contractAddress="0xbd42850F0Cca688e6D47FAA22Fd2f38ed1966ba7"
          contractAbi={abi}
          action={async (contract) => {

           // confirmMembership()
            const currentUrl = window.location.href;
            const queryStringIndex = currentUrl.indexOf("?");
            if (queryStringIndex !== -1) {
              const queryString = currentUrl.slice(queryStringIndex + 1);
              const params = new URLSearchParams(queryString);
              const referralWallet = params.get("refferalWallet");
              console.log(referralWallet)
              console.log(selectedPlanNumber)
              if (referralWallet) {
                await contract.call("buyMembership", [selectedPlanNumber, referralWallet])
              }else{
                await contract.call("buyMembership", [selectedPlanNumber, "0x0000000000000000000000000000000000000123"])
              }
            } 
          }}
          onSuccess={(result) => confirmMembership2()}
          onError={(error) => alert(`Error --> ${error.message}`)}
          className="buyMembershipClass"
        >
          {t("Confirm!")}
        </Web3Button>
          :
          <Web3Button
          //  contractAddress="0x0cda7c31216405d997479f3e0219a5d9f3d9909c"
          contractAddress="0xb478D406d432BCaD1c687aC46a61272B15fe19A5"
          contractAbi={abiToken}
          action={async (contract) => {
            
            await contract.call("approve", ["0xbd42850F0Cca688e6D47FAA22Fd2f38ed1966ba7", ethers.constants.MaxUint256])
            confirmMembership()
            setAprobado(true)
          }}
         // onSuccess={(result) =>  }
          onError={(error) => alert(`Error --> ${error.message}`)}
          className="buyMembershipClass"
        >
          {t("Approve expenses")}
        </Web3Button>
        }


        <ModalComponent
          isOpen={isModalProcessingOpen}
          setIsOpen={setIsModalProcessingOpen}
          classBody="bg-white w-[280px] h-[280px] rounded-[20px] shadow-lg"
        >
          {isProcessing ? (
            <div className="w-full h-full flex flex-col items-center justify-center px-16">
              <div>
                <Image
                  src={ProcessingIcon}
                  alt="processing"
                  width={60}
                  height={60}
                />
              </div>
              <p className="mt-8 text-[18px] text-[#A9AEB4] text-center">
                {t("Processing your Request")}
              </p>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div>
                <Image
                  src={CheckDone}
                  alt="Check done"
                  width={60}
                  height={60}
                />
              </div>
              <p className="mt-8 text-[18px] text-[#A9AEB4] text-center">
                {t("Done")}
              </p>
            </div>
          )}
        </ModalComponent>
      </div>
    </div>
    </ThirdwebProvider>
  );
};

export default SelectMembership;
