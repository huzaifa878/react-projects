import TaskCard from "./components/cards/TaskCard"
import UserDashboard from "./components/Dashboard/UserDashboard"
import Login from "./components/Forms/Login"
import AdminBoard from "./components/Others/AdminBoard"
import AdminEmployeeBoard from "./components/Others/AdminEmployeeBoard"
import AdminHeader from "./components/Others/AdminHeader"
import AdminTasks from "./components/Others/AdminTasks"
import Calendar from "./components/Others/Calendar"



const App = () => {


  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* <AdminHeader /> */}
        {/* <TaskCard /> */}
        {/* <AdminBoard /> */}
        {/* <AdminTasks /> */}
        {/* <AdminEmployeeBoard /> */}
        {/* <Calendar /> */}
        <Login />
        {/* <UserDashboard /> */}

      </div>
    </>
  )
}

export default App
