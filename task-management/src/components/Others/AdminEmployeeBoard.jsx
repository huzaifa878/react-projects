import AddRemoveEmployee from "../Employees/AddRemoveEmployee"

const AdminEmployeeBoard = () => {
    return (
        <div>
            <div className='bg-[#223040] w-screen flex-1 overflow-y-auto'>
                <div className='flex border border-2 border-blue-300 rounded-full bg-black bg-transparent text-white w-[50%] mx-auto mt-16 mb-8'>
                    <img src="/Search.svg" className='invert px-3 py-2 w-13' />
                    <input type="text" className='focus:outline-none pr-3' placeholder='Employee name...' />
                </div>
                <div className="flex m-8 flex-wrap gap-8 justify-center">
                    <div className="bg-[#05131f] w-[20vw] rounded-xl">
                        <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                            <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                        </div>
                        <h1 className="font-bold text-center text-blue-300 mt-2">Huzaifa Mateen</h1>
                        <h3 className="text-center text-blue-300/70 text-sm">Frontend Engineer</h3>
                        <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                        <div className="ml-3 flex items-center gap-2 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p className="text-blue-300 text-sm">huzaifamateen87@gmail.com</p>
                        </div>
                        <div className="ml-3 flex items-center gap-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                            <p className="text-blue-300 text-sm">+92 3120122706</p>
                        </div>
                        <div className="flex mx-auto gap-4 justify-center">
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">Message</button>
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">View Tasks</button>
                        </div>
                    </div>
                    
                    <div className="bg-[#05131f] w-[20vw] rounded-xl">
                        <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                            <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                        </div>
                        <h1 className="font-bold text-center text-blue-300 mt-2">Huzaifa Mateen</h1>
                        <h3 className="text-center text-blue-300/70 text-sm">Frontend Engineer</h3>
                        <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                        <div className="ml-3 flex items-center gap-2 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p className="text-blue-300 text-sm">huzaifamateen87@gmail.com</p>
                        </div>
                        <div className="ml-3 flex items-center gap-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                            <p className="text-blue-300 text-sm">+92 3120122706</p>
                        </div>
                        <div className="flex mx-auto gap-4 justify-center">
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">Message</button>
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">View Tasks</button>
                        </div>
                    </div>
                    
                    <div className="bg-[#05131f] w-[20vw] rounded-xl">
                        <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                            <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                        </div>
                        <h1 className="font-bold text-center text-blue-300 mt-2">Huzaifa Mateen</h1>
                        <h3 className="text-center text-blue-300/70 text-sm">Frontend Engineer</h3>
                        <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                        <div className="ml-3 flex items-center gap-2 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p className="text-blue-300 text-sm">huzaifamateen87@gmail.com</p>
                        </div>
                        <div className="ml-3 flex items-center gap-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                            <p className="text-blue-300 text-sm">+92 3120122706</p>
                        </div>
                        <div className="flex mx-auto gap-4 justify-center">
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">Message</button>
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">View Tasks</button>
                        </div>
                    </div>
                    
                    <div className="bg-[#05131f] w-[20vw] rounded-xl">
                        <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                            <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                        </div>
                        <h1 className="font-bold text-center text-blue-300 mt-2">Huzaifa Mateen</h1>
                        <h3 className="text-center text-blue-300/70 text-sm">Frontend Engineer</h3>
                        <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                        <div className="ml-3 flex items-center gap-2 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p className="text-blue-300 text-sm">huzaifamateen87@gmail.com</p>
                        </div>
                        <div className="ml-3 flex items-center gap-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                            <p className="text-blue-300 text-sm">+92 3120122706</p>
                        </div>
                        <div className="flex mx-auto gap-4 justify-center">
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">Message</button>
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">View Tasks</button>
                        </div>
                    </div>
                    
                    <div className="bg-[#05131f] w-[20vw] rounded-xl">
                        <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                            <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                        </div>
                        <h1 className="font-bold text-center text-blue-300 mt-2">Huzaifa Mateen</h1>
                        <h3 className="text-center text-blue-300/70 text-sm">Frontend Engineer</h3>
                        <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                        <div className="ml-3 flex items-center gap-2 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p className="text-blue-300 text-sm">huzaifamateen87@gmail.com</p>
                        </div>
                        <div className="ml-3 flex items-center gap-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                            <p className="text-blue-300 text-sm">+92 3120122706</p>
                        </div>
                        <div className="flex mx-auto gap-4 justify-center">
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">Message</button>
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">View Tasks</button>
                        </div>
                    </div>
                    
                    <div className="bg-[#05131f] w-[20vw] rounded-xl">
                        <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                            <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                        </div>
                        <h1 className="font-bold text-center text-blue-300 mt-2">Huzaifa Mateen</h1>
                        <h3 className="text-center text-blue-300/70 text-sm">Frontend Engineer</h3>
                        <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                        <div className="ml-3 flex items-center gap-2 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p className="text-blue-300 text-sm">huzaifamateen87@gmail.com</p>
                        </div>
                        <div className="ml-3 flex items-center gap-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                            <p className="text-blue-300 text-sm">+92 3120122706</p>
                        </div>
                        <div className="flex mx-auto gap-4 justify-center">
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">Message</button>
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">View Tasks</button>
                        </div>
                    </div>
                    
                    <div className="bg-[#05131f] w-[20vw] rounded-xl">
                        <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                            <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                        </div>
                        <h1 className="font-bold text-center text-blue-300 mt-2">Huzaifa Mateen</h1>
                        <h3 className="text-center text-blue-300/70 text-sm">Frontend Engineer</h3>
                        <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                        <div className="ml-3 flex items-center gap-2 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p className="text-blue-300 text-sm">huzaifamateen87@gmail.com</p>
                        </div>
                        <div className="ml-3 flex items-center gap-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                            <p className="text-blue-300 text-sm">+92 3120122706</p>
                        </div>
                        <div className="flex mx-auto gap-4 justify-center">
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">Message</button>
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">View Tasks</button>
                        </div>
                    </div>
                    
                    <div className="bg-[#05131f] w-[20vw] rounded-xl">
                        <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                            <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                        </div>
                        <h1 className="font-bold text-center text-blue-300 mt-2">Huzaifa Mateen</h1>
                        <h3 className="text-center text-blue-300/70 text-sm">Frontend Engineer</h3>
                        <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                        <div className="ml-3 flex items-center gap-2 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p className="text-blue-300 text-sm">huzaifamateen87@gmail.com</p>
                        </div>
                        <div className="ml-3 flex items-center gap-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                            <p className="text-blue-300 text-sm">+92 3120122706</p>
                        </div>
                        <div className="flex mx-auto gap-4 justify-center">
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">Message</button>
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">View Tasks</button>
                        </div>
                    </div>
                    
                    <div className="bg-[#05131f] w-[20vw] rounded-xl">
                        <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                            <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                        </div>
                        <h1 className="font-bold text-center text-blue-300 mt-2">Huzaifa Mateen</h1>
                        <h3 className="text-center text-blue-300/70 text-sm">Frontend Engineer</h3>
                        <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                        <div className="ml-3 flex items-center gap-2 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p className="text-blue-300 text-sm">huzaifamateen87@gmail.com</p>
                        </div>
                        <div className="ml-3 flex items-center gap-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                            <p className="text-blue-300 text-sm">+92 3120122706</p>
                        </div>
                        <div className="flex mx-auto gap-4 justify-center">
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">Message</button>
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">View Tasks</button>
                        </div>
                    </div>
                    
                    <div className="bg-[#05131f] w-[20vw] rounded-xl">
                        <div className="w-[75px] h-[75px] bg-blue-300 rounded-full mx-auto">
                            <img src="/Person.svg" alt="" width="70px" className="mx-auto mt-7" />
                        </div>
                        <h1 className="font-bold text-center text-blue-300 mt-2">Huzaifa Mateen</h1>
                        <h3 className="text-center text-blue-300/70 text-sm">Frontend Engineer</h3>
                        <div className="mx-auto h-[1px] bg-blue-300/30 w-[90%] mt-3"></div>
                        <div className="ml-3 flex items-center gap-2 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p className="text-blue-300 text-sm">huzaifamateen87@gmail.com</p>
                        </div>
                        <div className="ml-3 flex items-center gap-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[20px] text-blue-300/70 fill-current"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                            <p className="text-blue-300 text-sm">+92 3120122706</p>
                        </div>
                        <div className="flex mx-auto gap-4 justify-center">
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">Message</button>
                            <button className="cursor-pointer block bg-[#223040] text-blue-300 p-1 px-3 mt-5 mb-3 text-center rounded-lg">View Tasks</button>
                        </div>
                    </div>
                    
                    <div className="bg-blue-300 w-[20vw] rounded-xl flex items-center justify-center flex-col gap-3">
                        <button className="bg-[#223040] w-[180px] h-[180px] rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="170px" viewBox="0 -960 960 960" width="170px" className="mx-auto my-auto text-blue-300 fill-current"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                        </button>
                    </div>

                    <div className="bg-blue-300 w-[20vw] rounded-xl flex items-center justify-center flex-col gap-3">
                        <button className="bg-[#223040] w-[180px] h-[180px] rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="170px" viewBox="0 -960 960 960" width="170px" className="mx-auto my-auto text-blue-300 fill-current"><path d="M200-440v-80h560v80H200Z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <AddRemoveEmployee />
        </div>
    )
}

export default AdminEmployeeBoard
