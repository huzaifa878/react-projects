
const TaskCard = () => {
  return (
    <div className='flex flex-col bg-[#05131f] w-[100%] border-1 border-[#05131f] rounded-2xl p-3 mt-2 mb-4'>
      <h3 className="flex my-2 items-center gap-2">
        <img src="/Check.svg" className="border rounded-full w-4 h-4 invert"/>
        <span className="font-bold text-lg">Infographics or Productivity</span>
      </h3>
      <h3 className="font-semibold text-md text-[#05131f] bg-blue-300 rounded-full py-1/2 text-center w-[15%] mt-3">Blog</h3>
      <h3 className="font-bold text-xl mt-3">Huzaifa</h3>
      <ul className="mt-3">
        <div className="w-[95%] h-[1px] bg-blue-300/50"></div>
        <li className="flex my-2 items-center gap-2"><img src="/Check.svg" className="border rounded-full w-4 h-4 invert"/><span>Initial Design Review</span></li>
        <div className="w-[95%] h-[1px] bg-blue-300/50"></div>
        <li className="flex my-2 items-center gap-2"><div className="bg-blue-300 rounded-full w-4 h-4 "><img src="/Check.svg" className=""/></div><span>Aproved Budget</span></li>
        <div className="w-[95%] h-[1px] bg-blue-300/50"></div>
        <button className="cursor-pointer flex my-2 items-center gap-2"><img src="/Add.svg" className="w-5 h-5 invert"/><span>Add Subtask</span></button>
      </ul>
    </div>
  )
}

export default TaskCard
