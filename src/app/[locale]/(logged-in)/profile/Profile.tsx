"use client"
import React from 'react'
import { useUserRegisterStore } from '@/store/user-register'
import { useTranslations } from 'next-intl'
import EditIcon from "@/assets/icons/Edit.svg"
import Image from 'next/image'
import ButtonSecondary from '@/app/components/generals/ButtonSecondary'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const t = useTranslations()
  const userStore = useUserRegisterStore();
  const router = useRouter()

  const infoProfile = [
    {
      nameLabel: t("Email Address"),
      valueInput: userStore.email
    },
    {
      nameLabel: t("Full Name"),
      valueInput: userStore.fullName
    },
    {
      nameLabel: t("Username"),
      valueInput: userStore.username
    },
    {
      nameLabel: t("Phone Number"),
      valueInput: userStore.phoneNumber
    },
    {
      nameLabel: t("Country"),
      valueInput: userStore.country
    },
    {
      nameLabel: t("Gender"),
      valueInput: userStore.gender
    },
    {
      nameLabel: t("Date of Birth"),
      valueInput: userStore.dateOfBirth
    }
  ]

  return (
    <div className='profile'>
      <div className='container-form'>
        <div className='container-img-edit' onClick={() => router.push("/profile/edit")}>
          <Image src={EditIcon} alt="edit" width={18} height={18}/>
        </div>
        {
          infoProfile.map((item, index) => (
            <div className='container-info' key={index}>
              <p className='label'>{item.nameLabel}</p>
              <p className='value'>{item.valueInput}</p>
            </div>
          ))
        }
      </div>
      <div className='container-btn-logout'>
        <ButtonSecondary text={t("Log Out")}/>
      </div>
    </div>
  )
}

export default Profile