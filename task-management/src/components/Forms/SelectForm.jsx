import React, { useState, useRef, useEffect } from 'react'
import AddTask from './AddTask'
import AddRemoveEmployee from '../Employees/AddRemoveEmployee'

const SelectForm = ({ showSelection, setShowSelection }) => {
    const [formType, setFormType] = useState(null)
    const containerRef = useRef(null)

    const handleClick = (type) => {
        setFormType(type)
        setShowSelection(false) 
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setShowSelection(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [setShowSelection])

    return (
        <div>
            {showSelection && (
                <div className='fixed z-1 bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center gap-10'>
                    <div
                        ref={containerRef}
                        className="h-[50vh] w-[35%] max-w-2xl bg-[#05131f] rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] p-6 flex flex-col items-center justify-center gap-8"
                    >
                        <button
                            className='mt-3 w-full bg-blue-300 cursor-pointer text-[#05131f] rounded-lg py-2'
                            onClick={() => handleClick("task")}
                        >
                            Add Task
                        </button>

                        <button
                            className='mt-3 w-full bg-blue-300 cursor-pointer text-[#05131f] rounded-lg py-2'
                            onClick={() => handleClick("Add")}
                        >
                            Add Employee
                        </button>
                    </div>
                </div>
            )}

            {formType === "task" && <AddTask addTask={formType} setAddTask={setFormType} />}
            {(formType === "Add" || formType === "Remove") && <AddRemoveEmployee Function={formType} setFunction={setFormType} />}
        </div>
    )
}

export default SelectForm
