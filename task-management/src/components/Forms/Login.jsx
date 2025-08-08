import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()
  const { authData } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    authData.find(user => {
      if (user.userName === formData.username && user.email === formData.email) {
        if (user.role === 'admin') {
          navigate('/adminDashboard/admin')
        } else {
          navigate('/Dashboard')
        }
      }
    })
  }
  
  
  return (
    <div className="relative h-screen w-full bg-[url('/Background7.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="flex">
          <div className="bg-[#05131f] w-[20vw] h-[60vh] rounded-l-2xl flex justify-center items-center">
            <img src="/Logo.png" className="w-[70%]" />
          </div>

          <div className="bg-blue-300 w-[40vw] h-[60vh] rounded-r-2xl border-4 border-[#05131f] px-8 py-6 text-[#223040]">
            <h1 className="font-bold text-3xl mb-3">Welcome</h1>
            <h3 className="text-sm mb-3">Please Enter Your Details</h3>

            <h2 className="font-semibold">Username</h2>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              type="text"
              className="px-2 py-1 mt-1 mb-3 rounded-md border border-[#223040] focus:outline-none focus:ring-0 w-full"
            />

            <h2 className="font-semibold">Password</h2>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="px-2 py-1 mt-1 mb-3 rounded-md border border-[#223040] focus:outline-none focus:ring-0 w-full"
            />

            <button
              type="submit"
              className="bg-[#223040] font-bold text-blue-300 rounded-md w-full py-2 text-center mt-5 cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login;
