import React from 'react'

const AddTask = () => {
    return (
        <div>
            <div className='fixed z-1 bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center gap-10 hidden'>
                <div className="h-[90vh] w-[35%] max-w-2xl bg-[#05131f] rounded-lg shadow-lg p-6">
                    <div className='flex gap-5 items-center mb-4'>
                        <button className='bg-blue-300 text-[#05131f] text-center px-5 py-1 rounded-lg font-bold cursor-pointer'>Add Task</button>
                    </div>

                    <div className='w-[100%] h-[1px] bg-blue-300/30 mx-auto mt-8 mb-5'></div>

                    <div className='h-[60vh] overflow-y-auto placeholder:text-blue-300'>
                        <h2 className='text-blue-300'>Task Name</h2>
                        <input type="text" className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-5' />
                        <h2 className='text-blue-300'>Category</h2>
                        <input type="text" className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-3 pb-1 mb-5' />

                        <h2 className='text-blue-300'>Asign To</h2>
                        <input type="text" className='text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-b-1 border-b-blue-300 mb-3 pb-1 mb-5' />

                        <h2 className='text-blue-300'>Description</h2>
                        <textarea className='resize-none text-yellow-500 w-full focus:outline-none focus:ring-0 border-b border-1 border-blue-300 p-2 mb-5 mt-2 rounded-lg' rows="4" ></textarea>
                    </div>
                        <button className='mt-3 w-full bg-blue-300 cursor-pointer text-[#05131f] rounded-lg py-2'>Add</button>

                </div>

            </div>
        </div>
    )
}

export default AddTask
