import TaskCard from "./components/cards/TaskCard"
import AdminBoard from "./components/Others/AdminBoard"
import AdminEmployeeBoard from "./components/Others/AdminEmployeeBoard"
import AdminHeader from "./components/Others/AdminHeader"
import AdminTasks from "./components/Others/AdminTasks"
import Calendar from "./components/Others/Calendar"
import InfoFilterBar from "./components/Others/InfoFilterBar"


const App = () => {


  return (
    <>
      <div className="min-h-screen flex flex-col">
        <AdminHeader />
        <InfoFilterBar />
        {/* <TaskCard /> */}
        {/* <AdminBoard /> */}
        {/* <AdminTasks /> */}
        <AdminEmployeeBoard />
        {/* <Calendar /> */}
      </div>
    </>
  )
}

export default App
