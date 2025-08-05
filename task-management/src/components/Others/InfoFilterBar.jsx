import React from 'react'
import IncompleteTask from '../Forms/IncompleteTask'
import Filter from '../Forms/Filter'
import Sort from '../Forms/Sort'
import Rules from './Rules'

const InfoFilterBar = () => {
  return (
    <div className='flex justify-between items-center px-7 py-2 bg-[#05131f] border-t-1 border-b-1 border-blue-300 text-blue-300'>
      <p>2 tasks completed today</p>
      <div className='flex gap-9 items-center'>
        <IncompleteTask />
        <Filter />
        <Sort />
        <Rules />
      </div>
    </div>
  )
}

export default InfoFilterBar
