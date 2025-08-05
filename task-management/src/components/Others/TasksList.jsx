import React from 'react'

const TasksList = () => {
  return (
    <>
      <div className='mx-10 relative'>
        <button className='px-10 py-2 border-none text-black rounded-lg mb-2 bg-blue-300 mr-2'>All</button>
        <button className='px-10 py-2 border-none text-white rounded-lg mb-2 bg-[#05131f] mx-2'>In Progress</button>
        <button className='px-10 py-2 border-none text-white rounded-lg mb-2 bg-[#05131f] mx-2'>Done</button>
      </div>
      <div className='flex flex-row'>
        <div className='w-[40vw] min-h-[40vh] max-h-[60vh] bg-[#05131f] flex-1 overflow-y-auto rounded-lg mx-10 text-[#05131f]'>
          <div className='min-h-[35vh] max-h-[55vh] my-4 flex-1 overflow-y-auto rounded-lg'>
            <button className='flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-2 font-semibold'><img src="/Check.svg" className="border rounded-full w-4 h-4" /><span>Create a Website</span></button>
            <div className='flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-2 font-semibold'><img src="/Check.svg" className="border rounded-full w-4 h-4" /><span>Create a Website</span></div>
            <div className='flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-2 font-semibold'><img src="/Check.svg" className="border rounded-full w-4 h-4" /><span>Create a Website</span></div>
            <div className='flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-2 font-semibold'><img src="" className="border rounded-full w-4 h-4" /><span>Create a Website</span></div>
            <div className='flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-2 font-semibold'><img src="" className="border rounded-full w-4 h-4" /><span>Create a Website</span></div>
            <div className='flex items-center gap-2 bg-blue-300 w-[90%] mx-auto rounded-md p-2 my-2 font-semibold'><img src="" className="border rounded-full w-4 h-4" /><span>Create a Website</span></div>
          </div>
        </div>

        <div className='w-[40vw] min-h-[40vh] bg-blue-300 flex-1 rounded-lg mx-10 text-[#05131f]'>
          <div className='flex justify-between items-center'>
            <button className='font-bold text-xl p-3 border-t-1 border-l-1 border-blue-300 text-blue-300 bg-[#223040] rounded-md cursor-pointer'>Create a Website</button>
            <h4 className='font-bold text-md mr-5'>10-08-2025</h4>
          </div>
          <div className='h-[1px] w-[90%] text-center mx-auto bg-black/50 mt-4'></div>
          <p className='m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi id eos nihil, ab doloribus totam odio commodi, quo optio ducimus corporis soluta laboriosam asperiores cum necessitatibus dolorum incidunt quibusdam neque quia non temporibus. Delectus, suscipit! Provident nulla rem fuga repudiandae consectetur dolores odio quibusdam eveniet? Sequi explicabo at saepe modi!</p>
          <div className='h-[1px] w-[90%] text-center mx-auto bg-black/50 mt-4'></div>
          <div className='m-4'>
            <ul>
              <li className='flex justify-between items-center'>
                <span className='flex gap-3 items-center font-semibold'><img src="/Check.svg" className="border rounded-full w-4 h-4" />Make a Website more apealing</span>
                <button className=' bg-[#05131f] text-blue-300 rounded-md p-1 cursor-pointer'>Remove</button>
              </li>
              <li className='flex justify-between items-center mt-4'>
                <span className='flex gap-3 items-center font-semibold'><img src="/Check.svg" className="border rounded-full w-4 h-4" />Make a Website more apealing</span>
                <button className=' bg-[#05131f] text-blue-300 rounded-md p-1 cursor-pointer'>Remove</button>
              </li>
              <li className='flex justify-between items-center mt-4'>
                <span className='flex gap-3 items-center font-semibold'><img src="" className="border rounded-full w-4 h-4" />Make a Website more apealing</span>
                <button className=' bg-[#05131f] text-blue-300 rounded-md p-1 cursor-pointer'>Remove</button>
              </li>
            </ul>
            <button className='bg-[#05131f] text-blue-300 font-bold text-lg w-full py-1 text-center mt-6 rounded-md mx-auto cursor-pointer'>Add SubTask</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default TasksList
