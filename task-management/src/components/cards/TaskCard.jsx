import { useState, useRef, useEffect, useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'

const TaskCard = ({ task }) => {

  const [showInput, setShowInput] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const inputRef = useRef(null)
  const { dispatch } = useContext(TasksContext)
  const [formData, setFormData] = useState({
    title: "",
    isCompleted: false
  })


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAddSubtask = () => {
    setActiveCard(task.taskId);
    setShowInput(true);
  };

  useEffect(() => {
    if (activeCard !== task.taskId) {
      setShowInput(false);
    }
  }, [activeCard, task.taskId]);

  const handleEnter = () => {
    dispatch({
      type: "ADD_SUBTASK",
      payload: {
        taskId: task.taskId,
        subTasks: { title: formData.title, isCompleted: formData.isCompleted }
      }
    })
    setShowInput(false)
    setFormData({ title: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='flex flex-col bg-[#05131f] w-[100%] border-1 border-[#05131f] rounded-2xl p-3 mt-2 mb-4'>
      <h3 className="flex my-2 items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#1f1f1f" className={`${task.status == "completed" && "bg-blue-300 fill-current rounded-full text-[#05131f]"} {task.status != "completed" && "text-blue-300 fill-current border-1 border-blue-300 rounded-full fill-current"}`}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
        <button className="font-bold text-lg cursor-pointer">{task.taskName}</button>
      </h3>
      <button className="font-semibold text-md text-[#05131f] bg-blue-300 rounded-full py-1/2 text-center mt-3">{task.category}</button>
      <h3 className="font-bold text-xl mt-3">{task.asignTo}</h3>
      <ul className="mt-3">

        {task.subTasks.map((subTask, idx) => (
          <>
            <div className="w-[95%] h-[1px] bg-blue-300/50" key={idx + 10}></div>
            <li key={task.taskId} className="flex my-2 items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#1f1f1f" className={`${subTask.isCompleted && "bg-blue-300 fill-current rounded-full text-[#05131f]"} {subTask.isCompleted == false && "text-blue-300 fill-current border-1 border-blue-300 rounded-full fill-current"}`}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg><span>{subTask.title}</span></li>
          </>
        ))}

        {showInput && (
          <div ref={inputRef}>
            <li className="flex my-2 items-center gap-2">
              <input
                className="focus:outline-none focus:ring-0 w-full"
                autoFocus
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleEnter();
                  }
                }}
                onChange={(e) => handleChange(e)}
                name='title'
                value={formData.title}
              />
            </li>
          </div>
        )}


        {task.status != "completed" && (
          <>
            <div className="w-[95%] h-[1px] bg-blue-300/50"></div>
            <button onClick={handleAddSubtask} className="cursor-pointer flex my-2 items-center gap-2">
              <span>Add Subtask</span>
            </button>
          </>
        )}

      </ul>
    </div>
  )
}

export default TaskCard
