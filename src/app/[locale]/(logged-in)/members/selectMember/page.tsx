import React from 'react'
import SelectMembership from '@/app/[locale]/membership/SelectMembership';
import plansMembership from "@/app/[locale]/membership/moskData";

async function getDataPlans() {
  const dataPlans = plansMembership
  return dataPlans
}

interface PlansMembership {
  plan: string;
  price: string;
  profitReferralsMembership: string;
  profitReferralsEarnings: string;
}

const SelectMember = async () => {

  const plans = await getDataPlans()

  return (
    <SelectMembership />
  )
}

export default SelectMember