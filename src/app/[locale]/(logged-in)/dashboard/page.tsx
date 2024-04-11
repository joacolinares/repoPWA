import React from 'react'
import { dataTransactions } from '../transactions/moskData';
import Dashboard from './Dashboard'

 const getDataTransactions = async () => {
  const dataTransaction = dataTransactions
  return dataTransaction
}

const DashboardPage = async () => {
  const transactions = await getDataTransactions()
  let isDashboard = true

  return (
    <div>
        <Dashboard isDashboard={isDashboard} dataTransactions={transactions} />
    </div>
  )
}

export default DashboardPage