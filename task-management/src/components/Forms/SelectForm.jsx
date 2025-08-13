import React, { useState } from 'react'
import AddTask from './AddTask'

const SelectForm = ({ showSelection, setShowSelection }) => {
    const [showTask, setShowTask] = useState(false)
    const [showEmployee, setShowEmployee] = useState(false)


    return (
        <div>
            {showSelection && (<div className='fixed z-1 bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center gap-10'>
                <div className="h-[50vh] w-[35%] max-w-2xl bg-[#05131f] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-8">


                    <button
                        className='mt-3 w-full bg-blue-300 cursor-pointer text-[#05131f] rounded-lg py-2'
                        onClick={() => {
                            setShowSelection(false)
                            setShowTask(true)
                        }}
                    >Add Task</button>
                    <button
                        className='mt-3 w-full bg-blue-300 cursor-pointer text-[#05131f] rounded-lg py-2'
                        onClick={() => {
                            setShowSelection(false)
                            setShowEmployee(true)
                        }}
                    >Add Employee</button>

                    {/* {showEmployee && <} */}
                    {showTask && <AddTask />}
            </div>

            </div>)
}
        </div >
    )
}

export default SelectForm
