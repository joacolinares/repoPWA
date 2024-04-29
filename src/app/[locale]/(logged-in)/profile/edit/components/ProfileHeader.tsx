"use client"
import React from 'react'
import ProfilePic from './ProfilePic'
import { useUserRegisterStore } from '@/store/user-register';
import ButtonPrimary from '@/app/components/generals/ButtonPrimary';
import { useTranslations } from 'next-intl';
import { useAddress } from '@thirdweb-dev/react';

const ProfileHeader = () => {
  const t = useTranslations();
  const userStore = useUserRegisterStore();
  const wallet = useAddress()
  const copyReferralLink = () => {
    // cambiar el userStore.email por el link de referido
    const baseURL = window.location.origin;

    // Construir la URL completa con el segmento adicional
    const referralLink = `${baseURL}?refferalWallet=${wallet}`;

    // Copiar el enlace al portapapeles
    navigator.clipboard.writeText(referralLink);
  }

  return (
    <div className='profile-header flex flex-col items-center'>
      <div className='container-img-user'>
        <ProfilePic />
      </div>
      <div className='container-info-user text-center mb-[32px]'>
         <h1 className='text-white text-[18px] font-bold mb-1'>{userStore.fullName}</h1>
         <span className='text-white text-[14px]'>@{userStore.username}</span>
      </div>
       <div className='container-btn-copy w-full'>
          <ButtonPrimary text={t("Copy your Referral Link")} onClickFn={copyReferralLink}/>
       </div>
    </div>
  )
}

export default ProfileHeader