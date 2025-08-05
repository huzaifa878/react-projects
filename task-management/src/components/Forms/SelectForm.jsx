import React from 'react'

const SelectForm = () => {
    return (
        <div>
            <div className='fixed z-1 bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center gap-10 hidden'>
                <div className="h-[50vh] w-[35%] max-w-2xl bg-[#05131f] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-8">


                    <button className='mt-3 w-full bg-blue-300 cursor-pointer text-[#05131f] rounded-lg py-2'>Add Task</button>
                    <button className='mt-3 w-full bg-blue-300 cursor-pointer text-[#05131f] rounded-lg py-2'>Add Employee</button>

                </div>

            </div>
        </div>
    )
}

export default SelectForm
