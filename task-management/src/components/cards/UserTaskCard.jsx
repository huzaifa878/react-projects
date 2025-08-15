import { useContext, useRef, useEffect } from "react";
import { TasksContext } from "../../context/TasksContext";

const UserTaskCard = ({ setShowTask, showTask, task }) => {
    const months = {
        "01": "Jan", "02": "Feb", "03": "March", "04": "April",
        "05": "May", "06": "June", "07": "July", "08": "Aug",
        "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"
    };

    const { dispatch } = useContext(TasksContext);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setShowTask({ showTask: false, selectedTask: null });
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowTask]);

    const handleClick = (value) => {
        dispatch({
            type: "STATUS_UPDATE",
            payload: {
                taskId: task.taskId,
                status: value
            }
        });
        setShowTask({ showTask: false, selectedTask: null });
    };

    return (
        <div className='fixed z-1 bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center gap-10'>
            <div
                ref={cardRef}
                className="w-[35%] max-w-2xl bg-[#05131f] rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] p-6"
            >
                <div className="flex justify-between items-center mb-5">
                    <h1 className="text-blue-300 text-xl font-bold">{task.taskName}</h1>
                    <h3 className="text-sm text-blue-300/80">
                        {task.startDate.split('-')[2]} {months[task.startDate.split('-')[1]]} - {task.endDate.split('-')[2]} {months[task.endDate.split('-')[1]]}
                    </h3>
                </div>
                <span className="bg-blue-300 text-[#05131f] px-3 rounded-lg text-sm">{task.category}</span>
                <p className="text-blue-300 text-sm mt-8 mb-4 leading-loose">{task.description}</p>
                <div className="w-full h-[1px] bg-blue-300/30 mb-4"></div>
                {task.subTasks.map(subTask => (
                    <div key={subTask.title} className="flex gap-2 items-center mb-4">
                        <button className="bg-[#223040] rounded-full w-[20px] h-[20px]">
                            {subTask.isCompleted && <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className="text-blue-300 fill-current"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>}
                        </button>
                        <span className="text-blue-300">{subTask.title}</span>
                    </div>
                ))}
                {task.status === "asign" && (
                    <button className="w-full bg-blue-300 text-[#05131f] text-center py-2 cursor-pointer rounded-lg" onClick={() => handleClick("working")}>Working</button>
                )}
                {task.status === "working" && (
                    <button className="w-full bg-blue-300 text-[#05131f] text-center py-2 cursor-pointer rounded-lg" onClick={() => handleClick("completed")}>Complete</button>
                )}
            </div>
        </div>
    );
};

export default UserTaskCard;
