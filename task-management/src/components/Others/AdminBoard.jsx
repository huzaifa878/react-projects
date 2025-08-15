import React, { useState } from 'react'
import TaskCard from '../cards/TaskCard'
import AddTask from '../Forms/AddTask'
import { TasksContext } from '../../context/TasksContext'
import { useContext } from 'react'


const AdminBoard = () => {

  const { taskData } = useContext(TasksContext)

  const [addTask, setAddTask] = useState(null)

  return (
    <div className='bg-[#223040] w-screen flex-1 overflow-y-auto'>
      <section className='flex gap-5 text-blue-300'>
        <div className='w-1/3 px-6 py-8'>
          <h1 className='font-bold text-xl'>New Request</h1>

          {taskData.map((task) => (
            <>
              {task.status == "asign" && <TaskCard key={task.taskId} task={task} />}
            </>
          ))}
          <div className="bg-blue-300 w-full h-[48vh] rounded-xl flex items-center justify-center flex-col gap-3">
            <button
              className="bg-[#223040] w-[180px] h-[180px] rounded-full cursor-pointer"
              onClick={() => setAddTask("task")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="170px" viewBox="0 -960 960 960" width="170px" className="mx-auto my-auto text-blue-300 fill-current"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
            </button>
            {addTask && <AddTask addTask={addTask} setAddTask={setAddTask}/>}
          </div>
        </div>
        <div className='w-1/3 px-6 py-8'>
          <h1 className='font-bold text-xl'>In Progress</h1>
          {taskData.map((task) => (
            <>
              {task.status == "working" && <TaskCard key={task.taskId} task={task} />}
            </>
          ))}
        </div>
        <div className='w-1/3 px-6 py-8'>
          <h1 className='font-bold text-xl'>Completed</h1>
          {taskData.map((task) => (
            <>
              {task.status == "completed" && <TaskCard key={task.taskId} task={task} />}
            </>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AdminBoard
