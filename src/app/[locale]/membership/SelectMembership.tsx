"use client";
import Image from "next/image";
import IconLogo from "@/assets/imgs/LogoTipoPeq.png";
import { useTranslations } from "next-intl";
import ButtonSecondary from "@/app/components/generals/ButtonSecondary";
import { PlansMembership } from "@/app/[locale]/membership/moskData";
import CheckIcon from "@/assets/icons/CheckIcon";
import { useState } from "react";
import ModalComponent from "@/app/components/generals/ModalComponent";
import ButtonPrimary from "@/app/components/generals/ButtonPrimary";
import { usePathname, useRouter } from "next/navigation";
import { useUserPlanStore } from "@/store/user-plan";
import Navbar from "@/app/components/generals/Navbar";

interface Props {
  dataPlans: PlansMembership[];
}

const SelectMembership = ({ dataPlans }: Props) => {
  const t = useTranslations();
  const [selectedPlan, setSelectedPlan] = useState<PlansMembership | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { updateUser, ...user } = useUserPlanStore();

  const handleSelectPlan = (plan: string): void => {
    if (plan) {
      const planSelect = dataPlans.find((p) => p.plan === plan);
      if (planSelect) {
        setSelectedPlan(planSelect);
        updateUser(planSelect);
      }
    } else {
      setSelectedPlan(null);
    }
  };

  const confirmMembership = () => {
    if (selectedPlan) {
      router.push("/dashboard");
    }
  };

  const upgradePlan = () => {
    if (selectedPlan) {
      router.push("/members");
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

  return (
    <div className={`container-Membership`}>
      <div className="header">
        {pathname !== "/membership" ? (
          <div>
            <Navbar text={headerText}/>
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
        {dataPlans.map((plan) => (
          <div className="container-plan" key={plan.plan}>
            <div className="container-left">
              <h1 className="plan-title">{plan.plan}</h1>
              <div className="container-btn">
                <ButtonSecondary
                  text={t("See more")}
                  classname="--btnMember"
                  onClickFn={() => {
                    handleSelectPlan(plan.plan);
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
                onClick={() => handleSelectPlan(plan.plan)}
                className="container-check"
              >
                {selectedPlan?.plan === plan.plan && <CheckIcon />}
              </div>
            </div>
          </div>
        ))}
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
                  <CheckIcon />
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

      <div className={`px-[24px] ${pathname === "/membership" ? "mb-6" : "mb-[90px]"}`}>
        {pathname === "/membership" ? (
          <ButtonPrimary text={t("Confirm")} onClickFn={confirmMembership} />
        ) : (
          <ButtonPrimary text={t("Upgrade")} onClickFn={upgradePlan} />
        )}
      </div>
    </div>
  );
};

export default SelectMembership;
