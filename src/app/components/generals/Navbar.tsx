"use client"
import React from 'react'
import LogoPeq from '@/assets/imgs/LogoTipoPeq.png'
import Image from 'next/image'
import ContainerLanguage from './ContainerLanguage'
import NotificationsSVG from '@/assets/icons/NotificationsIcon'
import { usePathname, useRouter } from 'next/navigation'
import GoBack from './GoBack'


type HeaderPagesProps = {
  text: string;
};

const Navbar = ({text}: HeaderPagesProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='navbar'>
      {
        pathname === "/dashboard" ? (
          <div className='container-log'>
            <Image src={LogoPeq} alt="logo" width={28} height={24} />
          </div>
        ) : (
          <GoBack text={text} />
        )
      }
  
      <div className='container-language-notifications'>
        <ContainerLanguage />
        <NotificationsSVG fill='#fff' width={24} height={24} onClick={() => router.push('/notifications')}/>
      </div>
    </div>
  )
}

export default Navbar