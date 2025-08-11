import React from 'react'
import TasksList from './TasksList'

const AdminTasks = () => {
    return (
        <div className='bg-[#223040] w-screen flex-1 overflow-y-auto'>
            <div className='flex border border-2 border-blue-300 rounded-full bg-black bg-transparent text-white w-[50%] mx-auto mt-16 mb-8'>
                <img src="/Search.svg" className='invert px-3 py-2 w-13' />
                <input type="text" className='focus:outline-none pr-3' placeholder='Search by Task name'/>
            </div>
            <div>
                <TasksList />
            </div>
        </div>
    )
}

export default AdminTasks
