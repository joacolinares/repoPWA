import React from 'react'
import { dataTransactions } from './moskData'
import Transactions from './Transactions'

const TransactionsPage = () => {
  return (
    <div className='page-transactions pt-[24px] px-[24px] pb-[96px] bg-gradient-to-t from-[#0E0E33] to-[#39307B]'>
      <Transactions data={dataTransactions} />
    </div>
  )
}

export default TransactionsPage