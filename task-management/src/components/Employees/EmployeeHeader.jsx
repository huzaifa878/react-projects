import Add from "../Forms/Add"
import Help from "../Others/Help"
import Notification from "../Others/Notification"
import Search from "../Others/Search"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

const EmployeeHeader = () => {
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
                        <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-300 transition-colors duration-300">Tasks</li>
                        <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-300 transition-colors duration-300">Calendar</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-2xl text-blue-300">Huzaifa Mateen</h1>
            </div>
            <div className="flex gap-3 items-center">
            <Help />
            <Notification />
            <button className="bg-blue-300 text-[#05131f] px-4 py-1 rounded-lg" onClick={handleLogout}>Log Out</button>


            </div>
        </nav>
  )
}

export default EmployeeHeader
