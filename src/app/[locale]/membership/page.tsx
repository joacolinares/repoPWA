import React from 'react'
import SelectMembership from './SelectMembership'
import plansMembership  from "@/app/[locale]/membership/moskData"

async function getDataPlans() {
  const dataPlans = plansMembership
  return dataPlans
}

const MembershipPage = async () => {
  
  const plans = await getDataPlans()
  
  return (
    <>
      <SelectMembership dataPlans={plans} />
    </>
  )
}

export default MembershipPage