"use client"
import React, { ReactNode } from 'react'
import HomeSVG from '@/assets/icons/HomeIcon'
import OptionsSVG from '@/assets/icons/OptionsIcon'
import AddSVG from '@/assets/icons/AddIcon'
import LiquidationSVG from '@/assets/icons/LiquidationIcon'
import UserSVG from '@/assets/icons/UserIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type ListOptions = {
  title: string
  icon: ReactNode,
  link: string
}

const Footer = () => {
  const pathname = usePathname()

  const listOptions: ListOptions[] = [
    {
      title: "Dashboard",
      icon: <HomeSVG fill='#A9AEB4'/>,
      link: "/dashboard"
    },
    {
      title: "Menu",
      icon: <OptionsSVG fill='#A9AEB4'/>,
      link: "/menu"
    },
    {
      title: "Add Liquidation",
      icon: <AddSVG fill='#A9AEB4' stroke='#A9AEB4'/>,
      link: "/addLiquidity"
    },
    {
      title: "Liquidation",
      icon: <LiquidationSVG fill='#A9AEB4' />,
      link: "/liquidityPool"
    },
    {
      title: "Profile",
      icon: <UserSVG fill='#A9AEB4' stroke='#A9AEB4'/>,
      link: "/profile"
    },
  ]

  return (
    <div className='footer'>
      {listOptions.map((item, index) => (
        <Link href={item.link} key={index} className='link'>
          <div className={`container-icon ${pathname === item.link ? "fill:#FFFFFF" : ""} ${item.link === "/addLiquidation" ? "linkAdd" : ""}`}>
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Footer