import React from 'react'
import Operations from './Operations'
import {dataOperationsClaim, dataOperationsUnStake} from "./components/moskData"

async function getDataTransactions() {
  const dataClaim = dataOperationsClaim
  const dataUnStake = dataOperationsUnStake
  return {
    dataClaim,
    dataUnStake
  }
}

const OperationsPage = async () => {
  const {dataClaim, dataUnStake} = await getDataTransactions()

  return (
    <div>
      <Operations dataClaim={dataClaim} dataUnStake={dataUnStake} />
    </div>
  )
}

export default OperationsPage