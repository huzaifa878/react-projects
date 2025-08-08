import AdminBoard  from '../Others/AdminBoard'
import  AdminHeader  from '../Others/AdminHeader'
import  AdminTasks  from '../Others/AdminTasks'
import  AdminEmployeeBoard  from '../Others/AdminEmployeeBoard'
import  Calendar  from '../Others/Calendar'

const AdminDashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <AdminHeader />
            <AdminBoard />
            {/* <AdminTasks /> */}
            {/* <AdminEmployeeBoard /> */}
            {/* <Calendar /> */}

        </div>
    )
}

export default AdminDashboard
