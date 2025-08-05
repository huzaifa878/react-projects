import React from 'react'
import TaskCard from '../cards/TaskCard'

const AdminBoard = () => {
  return (
    <div className='bg-[#223040] w-screen flex-1 overflow-y-auto'>
      <section className='flex gap-5 text-blue-300'>
        <div className='w-1/3 px-6 py-8'>
            <h1 className='font-bold text-xl'>New Request</h1>
            <TaskCard />
        </div>
        <div className='w-1/3 px-6 py-8'>
        <h1 className='font-bold text-xl'>In Progress</h1>
            <TaskCard />
            <TaskCard />
            <TaskCard />
        </div>
        <div className='w-1/3 px-6 py-8'>
        <h1 className='font-bold text-xl'>Completed</h1>
            <TaskCard />
            <TaskCard />
        </div>
      </section>
    </div>
  )
}

export default AdminBoard
