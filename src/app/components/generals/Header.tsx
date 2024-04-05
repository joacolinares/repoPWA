import React from 'react'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation';
import DataStakesClaims from '@/app/[locale]/(logged-in)/dashboard/components/DataStakesClaims';

const Header = () => {
    const pathname = usePathname();

  return (
    <div className='header'>
        <Navbar /> 
        {pathname === "/dashboard" ? <DataStakesClaims /> : null}
    </div>
  )
}

export default Header