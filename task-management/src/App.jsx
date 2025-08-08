import AdminDashboard from "./components/Dashboard/AdminDashboard"
import UserDashboard from "./components/Dashboard/UserDashboard"
import Login from "./components/Forms/Login"
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

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
  }
])



const App = () => {


  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
