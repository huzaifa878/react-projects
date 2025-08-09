import Help from "./Help"
import Search from "./Search"
import Add from "../Forms/Add"
import Notification from "./Notification"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const AdminHeader = () => {

    const { dispatch } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        })
        navigate('/')
    }

    return (
        <nav className="flex justify-between align-center px-5 py-2 bg-[#05131f] items-center">
            <div className="flex justify-start align-center gap-2">
                <img src="/Logo.png" alt="Logo" width="80px" />
                <div>
                    <h2 className="text-blue-300 font-bold text-3xl mb-2 mt-2">LoopCraft</h2>
                    <ul className="flex text-blue-300 gap-5">
                        <Link to="/AdminDashboard/admin/tasks"><li className="cursor-pointer border-b-2 border-transparent hover:border-blue-300 transition-colors duration-300">Tasks</li></Link>
                        <Link to="/AdminDashboard/admin/board"><li className="cursor-pointer border-b-2 border-transparent hover:border-blue-300 transition-colors duration-300">Board</li></Link>
                        <Link to="/AdminDashboard/admin/employee"><li className="cursor-pointer border-b-2 border-transparent hover:border-blue-300 transition-colors duration-300">Employees</li></Link>
                        <Link to="/AdminDashboard/admin/calendar"><li className="cursor-pointer border-b-2 border-transparent hover:border-blue-300 transition-colors duration-300">Calendar</li></Link>
                    </ul>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <Search />
                <Help />
                <Notification />
                <Add />
                <button onClick={handleLogout} className="cursor-pointer py-[6px] px-5 rounded-lg bg-blue-300 text-[#05131f] font-semibold">Logout</button>
            </div>
        </nav>
    )
}

export default AdminHeader
