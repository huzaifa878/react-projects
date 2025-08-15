import React, { useState, useRef, useEffect, useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';

const AddTask = ({ addTask, setAddTask }) => {
    const { dispatch } = useContext(TasksContext);

    const [formData, setFormData] = useState({
        taskName: "",
        category: "",
        asignTo: "",
        description: "",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "",
        status: "asign",
        subTasks: []
    });

    const [error, setError] = useState("");

    const containerRef = useRef(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.taskName.trim() === "" ||
            formData.category.trim() === "" ||
            formData.asignTo.trim() === "" ||
            formData.endDate.trim() === "" ||
            formData.description.trim() === ""
        ) {
            setError("⚠ Please fill in all required fields.");
            return;
        }

        setError("");

        dispatch({
            type: "ADD_TASK",
            payload: formData
        });

        setFormData({
            taskName: "",
            category: "",
            asignTo: "",
            description: "",
            startDate: new Date().toISOString().split("T")[0],
            endDate: ""
        });

        setAddTask(null);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setAddTask(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`${addTask !== 'task' && "hidden"} fixed z-1 bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center gap-10`}>
            <form
                ref={containerRef}
                className="h-[90vh] w-[35%] max-w-2xl bg-[#05131f] rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] p-6 flex flex-col"
                onSubmit={handleSubmit}
            >
                <div className='flex gap-5 items-center mb-4'>
                    <div className='bg-blue-300 text-[#05131f] text-center px-5 py-1 rounded-lg font-bold'>Add Task</div>
                </div>

                {error && (
                    <div className="text-red-500 text-sm mb-3 bg-red-500/10 border border-red-500 p-2 rounded">
                        {error}
                    </div>
                )}

                <div className='w-[100%] h-[1px] bg-blue-300/30 mx-auto mt-2 mb-5'></div>

                <div className='h-[60vh] overflow-y-auto placeholder:text-blue-300 flex-1'>
                    <h2 className='text-blue-300'>Task Name</h2>
                    <input
                        type="text"
                        className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-blue-300 mb-5'
                        onChange={handleChange}
                        name="taskName"
                        value={formData.taskName}
                    />
                    <h2 className='text-blue-300'>Category</h2>
                    <input
                        type="text"
                        className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-blue-300 mb-5'
                        onChange={handleChange}
                        name="category"
                        value={formData.category}
                    />

                    <div className='flex gap-2'>
                        <div>
                            <h2 className='text-blue-300'>Asign To</h2>
                            <input
                                type="text"
                                className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-blue-300 mb-5'
                                onChange={handleChange}
                                name="asignTo"
                                value={formData.asignTo}
                            />
                        </div>

                        <div>
                            <h2 className='text-blue-300'>Date</h2>
                            <input
                                type="date"
                                className='text-yellow-500 w-[145%] focus:outline-none focus:ring-0 border-b border-b-blue-300 mb-5'
                                onChange={handleChange}
                                name="endDate"
                                value={formData.endDate}
                            />
                        </div>
                    </div>

                    <h2 className='text-blue-300'>Description</h2>
                    <textarea
                        className='resize-none text-yellow-500 w-full focus:outline-none focus:ring-0 border border-blue-300 p-2 mb-5 mt-2 rounded-lg'
                        rows="4"
                        onChange={handleChange}
                        name="description"
                        value={formData.description}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className='mt-3 w-full bg-blue-300 cursor-pointer text-[#05131f] rounded-lg py-2 hover:bg-blue-400'
                >Add</button>
            </form>
        </div>
    );
};

export default AddTask;
