import Calendar from '../Others/Calendar'
import EmployeeHeader from '../Employees/EmployeeHeader'
import EmployeeTasks from '../Employees/EmployeeTasks'


const UserDashboard = () => {
  return (
    <div>
      <EmployeeHeader />
      <EmployeeTasks />
      {/* <Calendar /> */}
    </div>
  )
}

export default UserDashboard
