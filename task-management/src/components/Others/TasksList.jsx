import React, { useState } from 'react'
import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'

const TasksList = () => {

  const [filterTasks, setFilterTasks] = useState("All")
  const { taskData } = useContext(TasksContext)
  console.log(taskData)

  return (
    <>
      <div className='mx-10 relative'>
        <button
          className={`${filterTasks == "All" && "bg-blue-300 text-[#05131f] font-bold"} ${filterTasks != "All" && "text-blue-300 bg-[#05131f]"} px-10 py-2 border-none rounded-lg mb-2  mr-2 cursor-pointer`}
          onClick={() => setFilterTasks("All")}
        >All</button>
        <button
          className={`${filterTasks == "Progress" && "bg-blue-300 text-[#05131f] font-bold"} ${filterTasks != "Progress" && "text-blue-300 bg-[#05131f]"} px-10 py-2 border-none rounded-lg mb-2  mr-2 cursor-pointer`}
          onClick={() => setFilterTasks("Progress")}
        >In Progress</button>
        <button
          className={`${filterTasks == "Completed" && "bg-blue-300 text-[#05131f] font-bold"} ${filterTasks != "Completed" && "text-blue-300 bg-[#05131f]"} px-10 py-2 border-none rounded-lg mb-2  mr-2 cursor-pointer`}
          onClick={() => setFilterTasks("Completed")}
        >Done</button>
      </div>
      <div className='flex flex-row'>
        <div className='w-[40vw] min-h-[40vh] max-h-[60vh] bg-[#05131f] flex-1 overflow-y-auto rounded-lg mx-10 text-[#05131f]'>
          <div className='min-h-[35vh] max-h-[55vh] my-4 flex-1 overflow-y-auto rounded-lg'>
            {taskData.map((task) => (
              <div key={task.taskId}>
                {(filterTasks == "Progress" && task.status == "working") && (
                  <button 
                  className='flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-3 font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className={"bg-blue-300 fill-current text-blue-300 fill-current border border-[#05131f] rounded-full"}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                    <span>{task.taskName}</span>
                    </button>)}

                {(filterTasks == "Completed" && task.status == "completed") && <button className='flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-3 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className={"bg-[#05131f] fill-current text-blue-300 rounded-full"}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg><span>{task.taskName}</span></button>}

                {filterTasks == "All" && <button className='flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-3 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className={`${task.status != "completed" && "bg-blue-300 fill-current text-blue-300 fill-current border border-[#05131f]"} ${task.status == "completed" && "bg-[#05131f] fill-current text-blue-300 "} rounded-full`}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg><span>{task.taskName}</span></button>}

              </div>
            ))}

          </div>
        </div>

        <div className='w-[40vw] min-h-[40vh] bg-blue-300 flex-1 rounded-lg mx-10 text-[#05131f]'>
          <div className='flex justify-between items-center'>
            <button className='font-bold text-xl p-3 border-t-1 border-l-1 border-blue-300 text-blue-300 bg-[#223040] rounded-md cursor-pointer'>Create a Website</button>
            <h4 className='font-bold text-md mr-5'>10-08-2025</h4>
          </div>
          <div className='h-[1px] w-[90%] text-center mx-auto bg-black/50 mt-4'></div>
          <p className='m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi id eos nihil, ab doloribus totam odio commodi, quo optio ducimus corporis soluta laboriosam asperiores cum necessitatibus dolorum incidunt quibusdam neque quia non temporibus. Delectus, suscipit! Provident nulla rem fuga repudiandae consectetur dolores odio quibusdam eveniet? Sequi explicabo at saepe modi!</p>
          <div className='h-[1px] w-[90%] text-center mx-auto bg-black/50 mt-4'></div>
          <div className='m-4'>
            <ul>
              <li className='flex justify-between items-center'>
                <span className='flex gap-3 items-center font-semibold'><img src="/Check.svg" className="border rounded-full w-4 h-4" />Make a Website more apealing</span>
                <button className=' bg-[#05131f] text-blue-300 rounded-md p-1 cursor-pointer'>Remove</button>
              </li>
              <li className='flex justify-between items-center mt-4'>
                <span className='flex gap-3 items-center font-semibold'><img src="/Check.svg" className="border rounded-full w-4 h-4" />Make a Website more apealing</span>
                <button className=' bg-[#05131f] text-blue-300 rounded-md p-1 cursor-pointer'>Remove</button>
              </li>
              <li className='flex justify-between items-center mt-4'>
                <span className='flex gap-3 items-center font-semibold'><img src="" className="border rounded-full w-4 h-4" />Make a Website more apealing</span>
                <button className=' bg-[#05131f] text-blue-300 rounded-md p-1 cursor-pointer'>Remove</button>
              </li>
            </ul>
            <button className='bg-[#05131f] text-blue-300 font-bold text-lg w-full py-1 text-center mt-6 rounded-md mx-auto cursor-pointer'>Add SubTask</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default TasksList
