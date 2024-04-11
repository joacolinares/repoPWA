"use client"
import React from 'react'
import ButtonsAndGraph from './components/ButtonsAndGraph'
import Transactions from '../transactions/Transactions'
import {DataTransactions} from '../transactions/moskData'
import Header from '@/app/components/generals/Header'
import { usePathname } from 'next/navigation'

interface Props {
    isDashboard?: boolean
    dataTransactions: DataTransactions[]
}

const Dashboard = ({isDashboard, dataTransactions}:Props) => {
    const pathname = usePathname();

  return (
    <div>
        <Header text={pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}/>
        
        <ButtonsAndGraph />
        <Transactions isDashboard={isDashboard} data={dataTransactions} />
    </div>
  )
}

export default Dashboard