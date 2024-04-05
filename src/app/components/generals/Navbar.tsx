"use client"
import React from 'react'
import LogoPeq from '@/assets/imgs/LogoTipoPeq.png'
import Image from 'next/image'
import ContainerLanguage from './ContainerLanguage'
import NotificationsSVG from '@/assets/icons/NotificationsIcon'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();

  return (
    <div className='navbar'>
      <div className='container-log'>
        <Image src={LogoPeq} alt="logo" width={28} height={24} />
      </div>
      <div className='container-language-notifications'>
        <ContainerLanguage />
        <NotificationsSVG fill='#fff' width={24} height={24} onClick={() => router.push('/notifications')}/>
      </div>
    </div>
  )
}

export default Navbar