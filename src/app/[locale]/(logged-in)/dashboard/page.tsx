import React from 'react'
import ButtonsAndGraph from './components/ButtonsAndGraph'
import Transactions from '../transactions/Transactions'
import {dataTransactions} from '../transactions/moskData'

const DashboardPage = () => {
  let isDashboard = true

  return (
    <div>
        <ButtonsAndGraph />
        <Transactions isDashboard={isDashboard} data={dataTransactions} />
    </div>
  )
}

export default DashboardPage