import UserTaskCard from "../cards/UserTaskCard"

const EmployeeTasks = () => {
    return (
        <div>
            <UserTaskCard />
            <div className='bg-[#223040] w-screen flex-1 overflow-y-auto'>
                <div className='flex border border-2 border-blue-300 rounded-full bg-black bg-transparent text-white w-[50%] mx-auto mt-16 mb-8'>
                    <img src="/Search.svg" className='invert px-3 py-2 w-13' />
                    <input type="text" className='focus:outline-none pr-3' placeholder='Task name...' />
                </div>

                <div className='mt-6 mb mx-23'>
                    <button className='bg-blue-300 text-[#05131f] px-3 py-1 rounded-lg mr-3 cursor-pointer'>All</button>
                    <button className='bg-[#05131f] text-blue-300 px-3 py-1 rounded-lg mr-3 cursor-pointer'>In Progress</button>
                    <button className='bg-[#05131f] text-blue-300 px-3 py-1 rounded-lg mr-3 cursor-pointer'>Completed</button>
                </div>

                <div className='w-[90%] h-[50vh] overflow-y-auto mx-auto my-5'>
                    <div className="flex m-8 flex-wrap gap-8 justify-center">
                        <div className='bg-[#05131f] w-[100%] rounded-xl flex gap-3'>
                            <div className='flex flex-col gap-1 w-[50%] bg-blue-300 rounded-l-xl p-2'>
                                <button className='text-[#05131f] font-bold text-xl cursor-pointer'>Create a Website</button>
                                <p className='mx-auto text-sm inline bg-[#05131f] text-blue-300 text-center rounded-xl w-[60%]'>Category</p>
                                <h3 className='mx-auto text-[#05131f]/80 text-sm'>5 Aug - 7 Aug</h3>
                            </div>

                            <div className='text-blue-300 p-2 text-sm mx-auto my-auto'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto illum tenetur delectus incidunt quas optio modi vel hic! Deleniti perferendis, dolorum a numquam non possimus impedit voluptates? Sunt illo hic ea corrupti nihil! Doloribus obcaecati ducimus, ab officiis voluptate earum!</p>
                            </div>
                            <div className='w-[30%] flex flex-col gap-2 justify-center items-center'>
                                <button className='bg-[#223040] text-blue-300 px-3 py-1 rounded-lg'>3 Sub Tasks</button>
                                <button className='bg-[#223040] text-blue-300 px-3 py-1 rounded-lg'>In Progress</button>
                            </div>
                        </div>

                        <div className='bg-[#05131f] w-[100%] rounded-xl flex gap-3'>
                            <div className='flex flex-col gap-1 w-[50%] bg-blue-300 rounded-l-xl p-2'>
                                <button className='text-[#05131f] font-bold text-xl cursor-pointer'>Create a Website</button>
                                <p className='mx-auto text-sm inline bg-[#05131f] text-blue-300 text-center rounded-xl w-[60%]'>Category</p>
                                <h3 className='mx-auto text-[#05131f]/80 text-sm'>5 Aug - 7 Aug</h3>
                            </div>

                            <div className='text-blue-300 p-2 text-sm mx-auto my-auto'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto illum tenetur delectus incidunt quas optio modi vel hic! Deleniti perferendis, dolorum a numquam non possimus impedit voluptates? Sunt illo hic ea corrupti nihil! Doloribus obcaecati ducimus, ab officiis voluptate earum!</p>
                            </div>
                            <div className='w-[30%] flex flex-col gap-2 justify-center items-center'>
                                <button className='bg-[#223040] text-blue-300 px-3 py-1 rounded-lg'>3 Sub Tasks</button>
                                <button className='bg-[#223040] text-blue-300 px-3 py-1 rounded-lg'>In Progress</button>
                            </div>
                        </div>

                        <div className='bg-[#05131f] w-[100%] rounded-xl flex gap-3'>
                            <div className='flex flex-col gap-1 w-[50%] bg-blue-300 rounded-l-xl p-2'>
                                <button className='text-[#05131f] font-bold text-xl cursor-pointer'>Create a Website</button>
                                <p className='mx-auto text-sm inline bg-[#05131f] text-blue-300 text-center rounded-xl w-[60%]'>Category</p>
                                <h3 className='mx-auto text-[#05131f]/80 text-sm'>5 Aug - 7 Aug</h3>
                            </div>

                            <div className='text-blue-300 p-2 text-sm mx-auto my-auto'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto illum tenetur delectus incidunt quas optio modi vel hic! Deleniti perferendis, dolorum a numquam non possimus impedit voluptates? Sunt illo hic ea corrupti nihil! Doloribus obcaecati ducimus, ab officiis voluptate earum!</p>
                            </div>
                            <div className='w-[30%] flex flex-col gap-2 justify-center items-center'>
                                <button className='bg-[#223040] text-blue-300 px-3 py-1 rounded-lg'>3 Sub Tasks</button>
                                <button className='bg-[#223040] text-blue-300 px-3 py-1 rounded-lg'>In Progress</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmployeeTasks
