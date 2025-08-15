import { useState, useEffect, useContext } from "react"
import { TasksContext } from '../../context/TasksContext'

const EmployeeCard = ({ user }) => {
    const [ui, setUi] = useState("main")
    const [fadeState, setFadeState] = useState("fadeOut")
    const { taskData } = useContext(TasksContext)

    const handleClick = (value) => {
        setUi(value)
    }

    useEffect(() => {
        if (ui === "task") {
            setFadeState("fadeOut")
            setTimeout(() => setFadeState("fadeIn"), 10)
        }
    }, [ui])

    return (
        <div className="bg-[#05131f] w-[20vw] rounded-xl">
            {ui === "main" && (
                <div>
                    <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                        <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                    </div>
                    <h1 className="font-bold text-center text-blue-300 mt-2">{user.userName}</h1>
                    <h3 className="text-center text-blue-300/70 text-sm">{user.position}</h3>
                    <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                    <div className="ml-3 flex items-center gap-2 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                        <p className="text-blue-300 text-sm">{user.email}</p>
                    </div>
                    <div className="ml-3 flex items-center gap-2 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" /></svg>
                        <p className="text-blue-300 text-sm">+{user.phoneNumber}</p>
                    </div>
                    <div className="flex mx-auto justify-center">
                        <button
                            className="cursor-pointer block bg-[#223040] text-blue-300 w-[90%] mt-5 mb-3 py-2 text-center rounded-lg hover:bg-[#2f4359] active:scale-95 transition"
                            onClick={() => handleClick("task")}
                        >
                            View Tasks
                        </button>
                    </div>
                </div>
            )}

            {ui === "task" && (
                <div
                    className={`overflow-y-auto bg-blue-300 rounded-lg h-[59vh] transition-opacity duration-500 ease-in-out 
                        ${fadeState === "fadeIn" ? "opacity-100" : "opacity-0"}
                    `}
                >
                    <div className="mx-3 my-10 h-[30vh] overflow-y-auto bg-[#223040] rounded-lg">
                        {taskData.map(task => {
                            if (task.asignTo == user.userName) {
                                return (
                                    <div key={task.taskId} className="mx-2 rounded-lg bg-blue-300 text-[#223040] my-2 py-2 px-3">
                                        {task.taskName}
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <button
                        className="bg-[#223040] text-blue-300 text-center mx-3 w-[90%] rounded-md cursor-pointer py-1 hover:bg-[#2f4359] active:scale-95 transition"
                        onClick={() => {
                            setFadeState("fadeOut")
                            setTimeout(() => handleClick("main"), 500)
                        }}
                    >
                        Back
                    </button>
                </div>
            )}
        </div>
    )
}

export default EmployeeCard
