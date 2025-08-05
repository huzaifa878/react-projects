import Help from "./Help"
import Search from "./Search"
import Add from "../Forms/Add"
import Notification from "./Notification"

const AdminHeader = () => {
    return (
        <nav className="flex justify-between align-center px-5 py-2 bg-[#05131f] items-center">
            <div className="flex justify-start align-center gap-2">
                <img src="/Logo.png" alt="Logo" width="80px" />
                <div>
                    <h2 className="text-blue-300 font-bold text-3xl mb-2 mt-2">LoopCraft</h2>
                    <ul className="flex text-blue-300 gap-5">
                        <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-300 transition-colors duration-300">Tasks</li>
                        <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-300 transition-colors duration-300">Board</li>
                        <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-300 transition-colors duration-300">Employees</li>
                        <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-300 transition-colors duration-300">Calendar</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <Search />
                <Help />
                <Notification />
                <Add />


            </div>
        </nav>
    )
}

export default AdminHeader
