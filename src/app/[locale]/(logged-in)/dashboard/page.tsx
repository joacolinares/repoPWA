import React from 'react'
import ButtonsAndGraph from './components/ButtonsAndGraph'
import Transactions from '../transactions/Transactions'
import {dataTransactions} from '../transactions/moskData'
import StackedAreaChart from '@/app/components/generals/charts/ChartLines'

const DashboardPage = () => {
  let isDashboard = true

  return (
    <div>
        <ButtonsAndGraph />
        <StackedAreaChart />
        <Transactions isDashboard={isDashboard} data={dataTransactions} />
    </div>
  )
}

export default DashboardPage