import SelectMembership from '@/app/[locale]/membership/SelectMembership';
import plansMembership from "@/app/[locale]/membership/moskData";
import React from 'react'

async function getDataPlans() {
  const dataPlans = plansMembership
  return dataPlans
}

const SelectMember = async () => {

  const plans = await getDataPlans()

  return (
    <>
      <SelectMembership dataPlans={plans}/>
    </>
  )
}

export default SelectMember