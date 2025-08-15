import Add from "../Forms/Add"
import Help from "../Others/Help"
import Notification from "../Others/Notification"
import Search from "../Others/Search"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"



const EmployeeHeader = () => {
    const { dispatch, loginData } = useContext(AuthContext)
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const parts = pathname.split('/')[2] || "task"

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
                        <Link 
                        to="/Dashboard/task"
                        className={`${parts != "task" && "border-transparent"} cursor-pointer border-b-2 hover:border-blue-300 transition-colors duration-300`}
                        >Tasks</Link>
                        <Link
                        to="/Dashboard/calendar" 
                        className={`${parts != "calendar" && "border-transparent"} cursor-pointer border-b-2 hover:border-blue-300 transition-colors duration-300`}
                        >Calendar</Link>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-2xl text-blue-300">{loginData.userName}</h1>
            </div>
            <div className="flex gap-3 items-center">
            <button className="bg-blue-300 text-[#05131f] px-4 py-1 rounded-lg cursor-pointer" onClick={handleLogout}>Log Out</button>


            </div>
        </nav>
  )
}

export default EmployeeHeader
