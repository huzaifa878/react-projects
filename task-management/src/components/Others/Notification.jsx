import React from 'react'

const Notification = () => {
    return (
        <div className=''>
            <div className='border border-2 border-blue-300 rounded-full p-[6px] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className='text-blue-300 fill-current'><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /></svg>
            </div>
            <div className='fixed z-1 bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center hidden'>
                <div className="h-[80vh] w-[35%] max-w-2xl bg-[#05131f] rounded-lg shadow-lg p-6">
                    <div className='flex gap-5 items-center mb-4'>
                        <button className='bg-blue-300 text-[#05131f] text-center px-5 py-1 rounded-lg font-bold'>Notification</button>
                        <button className='bg-[#223040] text-blue-300 text-center px-5 py-1 rounded-lg'>Request</button>
                    </div>

                    <div className='w-[95%] h-[1px] bg-blue-300/30 mx-auto mt-8 mb-5'></div>

                    <div className='h-[57vh] overflow-y-auto'>
                        <div className='mx-2 my-5 rounded-lg p-5 bg-[#223040] text-blue-300'>
                            <div className='flex justify-between items-center mb-3'>
                                <h1 className='font-semibold text-lg'>Huzaifa Mateen</h1>
                                <h3 className='text-blue-300/30'>1-Aug-2025</h3>
                            </div>
                            <p className='text-sm text-blue-300/80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolores iste et aut velit. Iusto cupiditate quae accusamus voluptatum, alias laborum nesciunt quasi voluptatem velit pariatur. Possimus voluptates cupiditate laboriosam fugit quos distinctio dolore corrupti sapiente, quibusdam reiciendis iusto quod.</p>
                            <div className='flex items-center mt-4'>
                                <input type="text" placeholder='Message....' className='focus:ring-0 focus:outline-none border border-1 border-blue-300 px-3 pb-[3px] pt-[1px] rounded-l-md' />
                                <button className='bg-blue-300 px-3 py-[3px] rounded-r-md text-[#223040] cursor-pointer'>Reply</button>
                                <button className='bg-blue-300 px-2 py-[3px] rounded-md ml-3 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className='text-[#223040] fill-current'><path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z" /></svg></button>
                            </div>
                        </div>

                        <div className='mx-2 my-5 rounded-lg p-5 bg-[#223040] text-blue-300'>
                            <div className='flex justify-between items-center mb-3'>
                                <h1 className='font-semibold text-lg'>Huzaifa Mateen</h1>
                                <h3 className='text-blue-300/30'>1-Aug-2025</h3>
                            </div>
                            <p className='text-sm text-blue-300/80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolores iste et aut velit. Iusto cupiditate quae accusamus voluptatum, alias laborum nesciunt quasi voluptatem velit pariatur. Possimus voluptates cupiditate laboriosam fugit quos distinctio dolore corrupti sapiente, quibusdam reiciendis iusto quod.</p>
                            <div className='flex items-center mt-4'>
                                <input type="text" placeholder='Message....' className='focus:ring-0 focus:outline-none border border-1 border-blue-300 px-3 py-[2px] rounded-l-md' />
                                <button className='bg-blue-300 px-3 py-[3px] rounded-r-md text-[#223040] cursor-pointer'>Reply</button>
                                <button className='bg-blue-300 px-2 py-[3px] rounded-md ml-3 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className='text-[#223040] fill-current'><path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z" /></svg></button>
                            </div>
                        </div>
                    </div>

                    <div className='h-[57vh] overflow-y-auto hidden'>
                        <div className='mx-2 my-5 rounded-lg p-5 bg-[#223040] text-blue-300'>
                            <div className='flex justify-between items-center mb-3'>
                                <h1 className='font-semibold text-lg'>Huzaifa Mateen</h1>
                                <h3 className='text-blue-300/30'>1-Aug-2025</h3>
                            </div>
                            <p className='text-sm text-blue-300/80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolores iste et aut velit. Iusto cupiditate quae accusamus voluptatum, alias laborum nesciunt quasi voluptatem velit pariatur. Possimus voluptates cupiditate laboriosam fugit quos distinctio dolore corrupti sapiente, quibusdam reiciendis iusto quod.</p>
                            <div className='flex items-center justify-between mt-4'>
                                <button className='w-[47%] bg-blue-300 px-2 py-[3px] rounded-md cursor-pointer text-[#223040] font-semibold'>Reject</button>
                                <button className='w-[47%] bg-blue-300 px-3 py-[3px] rounded-md text-[#223040] cursor-pointer font-semibold'>Accept</button>
                            </div>
                        </div>

                        <div className='mx-2 my-5 rounded-lg p-5 bg-[#223040] text-blue-300'>
                            <div className='flex justify-between items-center mb-3'>
                                <h1 className='font-semibold text-lg'>Huzaifa Mateen</h1>
                                <h3 className='text-blue-300/30'>1-Aug-2025</h3>
                            </div>
                            <p className='text-sm text-blue-300/80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolores iste et aut velit. Iusto cupiditate quae accusamus voluptatum, alias laborum nesciunt quasi voluptatem velit pariatur. Possimus voluptates cupiditate laboriosam fugit quos distinctio dolore corrupti sapiente, quibusdam reiciendis iusto quod.</p>
                            <div className='flex items-center justify-between mt-4'>
                                <button className='w-[47%] bg-blue-300 px-2 py-[3px] rounded-md cursor-pointer text-[#223040] font-semibold'>Reject</button>
                                <button className='w-[47%] bg-blue-300 px-3 py-[3px] rounded-md text-[#223040] cursor-pointer font-semibold'>Accept</button>
                            </div>
                        </div>

                        <div className='mx-2 my-5 rounded-lg p-5 bg-[#223040] text-blue-300'>
                            <div className='flex justify-between items-center mb-3'>
                                <h1 className='font-semibold text-lg'>Huzaifa Mateen</h1>
                                <h3 className='text-blue-300/30'>1-Aug-2025</h3>
                            </div>
                            <p className='text-sm text-blue-300/80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolores iste et aut velit. Iusto cupiditate quae accusamus voluptatum, alias laborum nesciunt quasi voluptatem velit pariatur. Possimus voluptates cupiditate laboriosam fugit quos distinctio dolore corrupti sapiente, quibusdam reiciendis iusto quod.</p>
                            <div className='flex items-center justify-between mt-4'>
                                <button className='w-[47%] bg-blue-300 px-2 py-[3px] rounded-md cursor-pointer text-[#223040] font-semibold'>Reject</button>
                                <button className='w-[47%] bg-blue-300 px-3 py-[3px] rounded-md text-[#223040] cursor-pointer font-semibold'>Accept</button>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
