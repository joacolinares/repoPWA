import React from 'react'
import LevelMembers from './Level'

const LevelPage = ({ params, searchParams }: { params: { slug: string }, searchParams: any }) => {
    // console.log({params, searchParams})
  return (
    <div>
      <LevelMembers />
    </div>
  )
}

export default LevelPage