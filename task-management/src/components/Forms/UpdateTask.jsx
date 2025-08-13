import React, { useState } from 'react'
import { TasksContext } from '../../context/TasksContext'
import { useContext } from 'react'

const UpdateTask = ({task, setShowForm}) => {

    const { dispatch } = useContext(TasksContext)


    const [formData, setFormData] = useState({
        taskName: task.taskName,
        category: task.category,
        asignTo: task.asignTo,
        description: task.description,
        endDate: task.endDate,
        taskId: task.taskId
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
        dispatch({
            type: "UPDATE_TASK",
            payload: formData
        })

        
        setFormData({
            taskName: "",
            category: "",
            asignTo: "",
            description: "",
            endDate: "",
            taskId: ""
        })

        setShowForm(false)

    }

    return (
        <div>
            <div className={`fixed z-1 bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center gap-10`}>
                <form
                    className="h-[90vh] w-[35%] max-w-2xl bg-[#05131f] rounded-lg shadow-lg p-6"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <div className='flex gap-5 items-center mb-4'>
                        <button className='bg-blue-300 text-[#05131f] text-center px-5 py-1 rounded-lg font-bold cursor-pointer'>Update Task</button>
                    </div>

                    <div className='w-[100%] h-[1px] bg-blue-300/30 mx-auto mt-8 mb-5'></div>

                    <div className='h-[60vh] overflow-y-auto placeholder:text-blue-300'>
                        <h2 className='text-blue-300'>Task Name</h2>
                        <input
                            type="text"
                            className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-5'
                            onChange={(e) => handleChange(e)}
                            name="taskName"
                            value={formData.taskName}
                        />
                        <h2 className='text-blue-300'>Category</h2>
                        <input
                            type="text"
                            className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-3 pb-1 mb-5'
                            onChange={(e) => handleChange(e)}
                            name="category"
                            value={formData.category}
                        />

                        <div className='flex gap-2'>
                            <div>
                                <h2 className='text-blue-300'>Asign To</h2>
                                <input
                                    type="text"
                                    className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-3 pb-1 mb-5'
                                    onChange={(e) => handleChange(e)}
                                    name="asignTo"
                                    value={formData.asignTo}
                                />
                            </div>

                            <div>
                                <h2 className='text-blue-300'>Date</h2>
                                <input
                                    type="date"
                                    className='text-yellow-500 w-[145%] focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-3 pb-1 mb-5'
                                    onChange={(e) => handleChange(e)}
                                    name="endDate"
                                    value={formData.endDate}
                                />
                            </div>
                        </div>

                        <h2 className='text-blue-300'>Description</h2>
                        <textarea
                            className='resize-none text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-1 border-blue-300 p-2 mb-5 mt-2 rounded-lg' rows="4"
                            onChange={(e) => handleChange(e)}
                            name="description"
                            value={formData.description}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className='mt-3 w-full bg-blue-300 cursor-pointer text-[#05131f] rounded-lg py-2'
                    >Update</button>

                </form>

            </div>
        </div>
    )
}

export default UpdateTask
