import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'
import UpdateTask from '../Forms/UpdateTask'

const TasksList = ({ filterTasks, setFilterTasks, searchValue }) => {

  const [subTask, setSubTask] = useState("")
  const [showInput, setShowInput] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const { taskData, dispatch } = useContext(TasksContext)
  const [taskSelected, setTaskSelected] = useState(null)
  const [formData, setFormData] = useState({
    taskName: "",
    asignTo: "",
    category: "",
    description: "",
    endDate: ""
  })

  const handleRemove = (subTask) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: {
        taskId: taskSelected.taskId,
        title: subTask.title
      }
    })
  }

  const handleClick = (task) => {
    setShowForm(true)
    const Data = {
      taskName: task.taskName,
      asignTo: task.asignTo,
      category: task.category,
      description: task.description,
      endDate: task.endDate
    }
    setFormData(Data)
  }

  useEffect(() => {
    if (taskSelected) {
      const updated = taskData.find(t => t.taskId === taskSelected.taskId);
      setTaskSelected(updated);
    }
  }, [taskData]);

  const handleChange = (e) => {
    setSubTask(e.target.value)
  }

  const handleEnter = () => {
    dispatch({
      type: "ADD_SUBTASK",
      payload: {
        taskId: taskSelected.taskId,
        subTasks: { title: subTask, isCompleted: false }
      }
    })
    setShowInput(false)
    setSubTask("")
  }

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
      <div className='flex flex-row items-start mb-10'>
        <div className='w-[40vw] min-h-[40vh] max-h-[60vh] bg-[#05131f] overflow-y-auto rounded-lg mx-10 text-[#05131f]'>
          <div className='min-h-[35vh] max-h-[55vh] my-4 flex-1 overflow-y-auto rounded-lg'>
            {taskData.map((task) => (
              <div key={task.taskId}>
                {(filterTasks == "Progress" && task.status == "working") && (
                  <button
                    className={`flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-3 font-semibold cursor-pointer transform transition-transform duration-200 hover:scale-105 ${taskSelected?.taskName == task.taskName && "scale-105"}`}
                    onClick={() => {
                      if (taskSelected?.taskId === task.taskId) {
                        setTaskSelected(null);
                      } else {
                        setTaskSelected(task);
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className={"bg-blue-300 fill-current text-blue-300 fill-current border border-[#05131f] rounded-full"}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                    <span>{task.taskName}</span>
                  </button>)}

                {(filterTasks == "Completed" && task.status == "completed") && (
                  <button
                    className={`flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-3 font-semibold cursor-pointer transform transition-transform duration-200 hover:scale-105 ${taskSelected?.taskName == task.taskName && "scale-105"}`}
                    onClick={() => {
                      if (taskSelected?.taskId === task.taskId) {
                        setTaskSelected(null);
                      } else {
                        setTaskSelected(task);
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className={"bg-[#05131f] fill-current text-blue-300 rounded-full"}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                    <span>{task.taskName}</span>
                  </button>)}

                {filterTasks == "All" && (
                  <button
                    className={`flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-3 font-semibold cursor-pointer transform transition-transform duration-200 hover:scale-105 ${taskSelected?.taskName == task.taskName && "scale-105"}`}
                    onClick={() => {
                      if (taskSelected?.taskId === task.taskId) {
                        setTaskSelected(null);
                      } else {
                        setTaskSelected(task);
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className={`${task.status != "completed" && "bg-blue-300 fill-current text-blue-300 fill-current border border-[#05131f]"} ${task.status == "completed" && "bg-[#05131f] fill-current text-blue-300 "} rounded-full`}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                    <span>{task.taskName}</span>
                  </button>)}

                {(filterTasks == "Search" && task.taskName.toLowerCase().includes(searchValue.toLowerCase())) && (
                  <button
                    className={`flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-3 font-semibold cursor-pointer transform transition-transform duration-200 hover:scale-105 ${taskSelected?.taskName == task.taskName && "scale-105"}`}
                    onClick={() => {
                      if (taskSelected?.taskId === task.taskId) {
                        setTaskSelected(null);
                      } else {
                        setTaskSelected(task);
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className={`${task.status != "completed" && "bg-blue-300 fill-current text-blue-300 fill-current border border-[#05131f]"} ${task.status == "completed" && "bg-[#05131f] fill-current text-blue-300 "} rounded-full`}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                    <span>{task.taskName}</span>
                  </button>)}

              </div>
            ))}

          </div>
        </div>
        {!taskSelected && <div className='w-[40vw] bg-blue-300 rounded-lg mx-10 h-[50vh]'></div>}

        {taskSelected && <div className='w-[40vw] bg-blue-300 rounded-lg mx-10 text-[#05131f]'>
          <div className='flex justify-between items-center'>
            <button
              className='font-bold text-xl p-3 border-t-1 border-l-1 border-blue-300 text-blue-300 bg-[#223040] rounded-md cursor-pointer'
              onClick={() => handleClick(taskSelected)}
            >{taskSelected.taskName}</button>
            <h4 className='font-bold text-md mr-5'>{taskSelected.endDate}</h4>
          </div>
          <div className='h-[1px] w-[95%] text-center mx-auto bg-black/50 mt-4'></div>
          <p className='m-4'>{taskSelected.description}</p>
          <div className='h-[1px] w-[95%] text-center mx-auto bg-black/50 mt-4'></div>
          <div className='m-4'>
            <ul>
              {taskSelected.subTasks.map((subTask, id) => (
                <li
                  key={id}
                  className='flex justify-between items-center my-2'>
                  <span className='flex gap-3 items-center font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className={`${subTask.isCompleted && "bg-[#05131f] text-blue-300 fill-current"} ${!subTask.isCompleted && "text-blue-300 fill-current"} rounded-full border border-[#05131f]`}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>{subTask.title}</span>
                  {subTask.isCompleted == false && <button
                    className=' bg-[#05131f] text-blue-300 rounded-md p-1 cursor-pointer'
                    onClick={() => handleRemove(subTask)}
                  >Remove</button>}
                </li>
              ))}
              {showInput &&
                (<li>
                  <input
                    type="text"
                    className='font-semibold focus:outline-none focus:ring-0 w-[95%]'
                    autoFocus
                    onChange={(e) => handleChange(e)}
                    value={subTask}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleEnter();
                      }
                    }}
                  />
                </li>)}
            </ul>
            {taskSelected.status != "completed" && <button className='bg-[#05131f] text-blue-300 font-bold text-lg w-full py-1 text-center mt-6 rounded-md mx-auto cursor-pointer' onClick={() => setShowInput(true)}>Add SubTask</button>}
          </div>
        </div>}
        {showForm && <UpdateTask task={taskSelected} setShowForm={setShowForm} />}
      </div >
    </>
  )
}

export default TasksList
