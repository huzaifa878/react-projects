import AdminDashboard from "./components/Dashboard/AdminDashboard"
import UserDashboard from "./components/Dashboard/UserDashboard"
import Login from "./components/Forms/Login"
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import AdminHeader from "./components/Others/AdminHeader"
import AdminTasks from "./components/Others/AdminTasks"
import AdminBoard from "./components/Others/AdminBoard"
import AdminEmployeeBoard from "./components/Others/AdminEmployeeBoard"
import Calendar from "./components/Others/Calendar"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <><Login /></>
  },
  {
    path: "/Dashboard",
    element: <><UserDashboard /></>
  },
  {
    path: "/AdminDashboard/admin",
    element: <><AdminDashboard /></>
  },
  {
    path: "/AdminDashboard/admin/tasks",
    element: <><AdminHeader /><AdminTasks /></>
  },
  {
    path: "/AdminDashboard/admin/board",
    element: <><AdminHeader /><AdminBoard /></>
  },
  {
    path: "/AdminDashboard/admin/employee",
    element: <><AdminHeader /><AdminEmployeeBoard /></>
  },
  {
    path: "/AdminDashboard/admin/calendar",
    element: <><AdminHeader /><Calendar /></>
  },
])



const App = () => {


  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
