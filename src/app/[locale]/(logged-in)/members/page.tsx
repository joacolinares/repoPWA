import React from 'react'
import Members from './Members'
import plansMembership  from "@/app/[locale]/membership/moskData"

async function getDataPlans() {
    const dataPlans = plansMembership
    return dataPlans
}

const MembersPage = async () => {
  const plans = await getDataPlans()

  return (
    <>
     <Members />
    </>
  )
}

export default MembersPage