import { useState } from "react"
import UserTaskCard from "../cards/UserTaskCard"
import { TasksContext } from "../../context/TasksContext"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"


const EmployeeTasks = () => {

    const [filter, setFilter] = useState("All")
    const { loginData } = useContext(AuthContext)
    const { taskData } = useContext(TasksContext)
    const months = {
        "01": "Jan",
        "02": "Feb",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "Aug",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec"
    }
    const [searchValue, setSearchValue] = useState(null)

    const [data, setData] = useState({
        showTask: false,
        selectedTask: null
    })

    const handleClick = (value) => {
        setFilter(value)
    }

    const nameClick = (task) => {
        setData({
            showTask: true,
            selectedTask: task,
        })
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <div>
            <div className='bg-[#223040] w-screen flex-1 overflow-y-auto'>
                <div className='flex border border-2 border-blue-300 rounded-full bg-black bg-transparent text-white w-[50%] mx-auto mt-16 mb-8'>
                    <img src="/Search.svg" className='invert px-3 py-2 w-13' />
                    <input
                        type="text"
                        className='focus:outline-none pr-3 bg-transparent text-white w-full'
                        placeholder='Task name...'
                        value={searchValue || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className='mt-6 mb mx-23'>
                    <button
                        className={`${filter == "All" && "bg-blue-300 text-[#05131f] font-bold"} ${filter != "All" && "bg-[#05131f] text-blue-300"} px-3 py-1 rounded-lg mr-3 cursor-pointer`}
                        onClick={() => handleClick("All")}
                    >All</button>
                    <button
                        className={`${filter == "Progress" && "bg-blue-300 text-[#05131f] font-bold"} ${filter != "Progress" && "bg-[#05131f] text-blue-300"} px-3 py-1 rounded-lg mr-3 cursor-pointer`}
                        onClick={() => handleClick("Progress")}
                    >In Progress</button>
                    <button
                        className={`${filter == "Completed" && "bg-blue-300 text-[#05131f] font-bold"} ${filter != "Completed" && "bg-[#05131f] text-blue-300"} px-3 py-1 rounded-lg mr-3 cursor-pointer`}
                        onClick={() => handleClick("Completed")}
                    >Completed</button>
                </div>

                <div className='w-[90%] h-[50vh] overflow-y-auto mx-auto my-5'>
                    <div className="flex m-8 flex-wrap gap-8 justify-center">

                        {taskData.map(task => {
                            if (task.asignTo == loginData.userName) {
                                if (filter == "Progress" && task.status == "working" &&
                                    task.taskName.toLowerCase().includes((searchValue || "").toLowerCase())) {
                                    return <div key={task.taskId} className='bg-[#05131f] w-[100%] rounded-xl flex gap-3'>
                                        <div className='flex flex-col gap-1 w-[50%] bg-blue-300 rounded-l-xl p-2'>
                                            <button className='text-[#05131f] font-bold text-xl cursor-pointer' onClick={() => nameClick(task)}>{task.taskName}</button>
                                            <p className='mx-auto text-sm inline bg-[#05131f] text-blue-300 text-center rounded-xl w-[60%]'>{task.category}</p>
                                            <h3 className='mx-auto text-[#05131f]/80 text-sm'>{task.startDate.split('-')[2]} {months[task.startDate.split('-')[1]]} - {task.endDate.split('-')[2]} {months[task.endDate.split('-')[1]]}
                                            </h3>
                                        </div>

                                        <div className='text-blue-300 p-2 w-[140%] text-sm mx-auto my-auto'>
                                            <p>{task.description}</p>
                                        </div>
                                        <div className='w-[30%] flex flex-col gap-2 justify-center items-center'>
                                            <button className='bg-[#223040] text-blue-300 px-3 py-1 rounded-lg w-[80%]'>{task.subTasks.length} Sub Tasks</button>
                                            <button className='bg-[#223040] text-blue-300 px-3 py-1 rounded-lg w-[80%]'>{task.status == "asign" && "Asign"} {task.status == "working" && "In Progress"} {task.status == "completed" && "Completed"}</button>
                                        </div>
                                    </div>
                                }
                                if (filter == "Completed" && task.status == "completed" &&
                                    task.taskName.toLowerCase().includes((searchValue || "").toLowerCase())) {
                                    return <div key={task.taskId} className='bg-[#05131f] w-[100%] rounded-xl flex gap-3'>
                                        <div className='flex flex-col gap-1 w-[50%] bg-blue-300 rounded-l-xl p-2'>
                                            <button className='text-[#05131f] font-bold text-xl cursor-pointer' onClick={() => nameClick(task)}>{task.taskName}</button>
                                            <p className='mx-auto text-sm inline bg-[#05131f] text-blue-300 text-center rounded-xl w-[60%]'>{task.category}</p>
                                            <h3 className='mx-auto text-[#05131f]/80 text-sm'>{task.startDate.split('-')[2]} {months[task.startDate.split('-')[1]]} - {task.endDate.split('-')[2]} {months[task.endDate.split('-')[1]]}
                                            </h3>
                                        </div>

                                        <div className='text-blue-300 p-2 w-[140%] text-sm mx-auto my-auto'>
                                            <p>{task.description}</p>
                                        </div>
                                        <div className='w-[30%] flex flex-col gap-2 justify-center items-center'>
                                            <button className='bg-[#223040] text-blue-300 px-3 py-1 rounded-lg w-[80%]'>{task.subTasks.length} Sub Tasks</button>
                                            <button className='bg-[#223040] text-blue-300 px-3 py-1 rounded-lg w-[80%]'>{task.status == "asign" && "Asign"} {task.status == "working" && "In Progress"} {task.status == "completed" && "Completed"}</button>
                                        </div>
                                    </div>
                                }
                                if (filter == "All" &&
                                    task.taskName.toLowerCase().includes((searchValue || "").toLowerCase())) {
                                    return <div key={task.taskId} className='bg-[#05131f] w-[100%] rounded-xl flex gap-3'>
                                        <div className='flex flex-col gap-1 w-[50%] bg-blue-300 rounded-l-xl p-2'>
                                            <button className='text-[#05131f] font-bold text-xl cursor-pointer' onClick={() => nameClick(task)}>{task.taskName}</button>
                                            <p className='mx-auto text-sm inline bg-[#05131f] text-blue-300 text-center rounded-xl w-[60%]'>{task.category}</p>
                                            <h3 className='mx-auto text-[#05131f]/80 text-sm'>{task.startDate.split('-')[2]} {months[task.startDate.split('-')[1]]} - {task.endDate.split('-')[2]} {months[task.endDate.split('-')[1]]}
                                            </h3>
                                        </div>

                                        <div className='text-blue-300 p-2 w-[140%] text-sm mx-auto my-auto'>
                                            <p>{task.description}</p>
                                        </div>
                                        <div className='w-[30%] flex flex-col gap-2 justify-around m-1'>
                                            <button className='bg-[#223040] h-[40%] text-blue-300 px-3 py-1 rounded-lg w-[90%]'>{task.subTasks.length} Sub Tasks</button>
                                            <button className='bg-[#223040] text-blue-300 h-[40%] px-3 py-1 rounded-lg w-[90%]'>{task.status == "asign" && "Asign"} {task.status == "working" && "In Progress"} {task.status == "completed" && "Completed"}</button>
                                        </div>
                                    </div>
                                }
                            }
                        })}
                    </div>
                </div>
            </div>
            {data.showTask && <UserTaskCard showTask={data.showTask} task={data.selectedTask} setShowTask={setData} />}

        </div>
    )
}

export default EmployeeTasks
