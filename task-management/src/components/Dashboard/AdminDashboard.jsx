import  AdminHeader  from '../Others/AdminHeader'
import AdminTasks from '../Others/AdminTasks'

const AdminDashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <AdminHeader />
            <AdminTasks />

        </div>
    )
}

export default AdminDashboard
