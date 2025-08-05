import EmployeeCard from "../cards/EmployeeCard"
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
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    
                    
                    
                    <div className="bg-blue-300 w-[20vw] h-[50vh] rounded-xl flex items-center justify-center flex-col gap-3">
                        <button className="bg-[#223040] w-[180px] h-[180px] rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="170px" viewBox="0 -960 960 960" width="170px" className="mx-auto my-auto text-blue-300 fill-current"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                        </button>
                    </div>

                    <div className="bg-blue-300 w-[20vw] h-[50vh] rounded-xl flex items-center justify-center flex-col gap-3">
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
