import SelectMembership from '@/app/[locale]/membership/SelectMembership';
import plansMembership from "@/app/[locale]/membership/moskData";
import React from 'react'


const SelectMember = () => {
  return (
    <>
      <SelectMembership dataPlans={plansMembership}/>
    </>
  )
}

export default SelectMember