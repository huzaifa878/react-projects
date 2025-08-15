import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { authData, dispatch } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage(""); // Remove error when user starts typing again
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = authData.find(
      (u) => u.userName === formData.username && u.email === formData.email
    );

    if (user) {
      setErrorMessage(""); // Clear error
      dispatch({
        type: "LOGIN_INFO",
        payload: user,
      });

      // Clear input fields
      setFormData({ username: "", email: "" });

      if (user.role === "admin") {
        navigate("/adminDashboard/admin");
      } else {
        navigate("/Dashboard");
      }
    } else {
      setErrorMessage("Invalid username or email. Please try again.");

      // Still clear the fields even if invalid
      setFormData({ username: "", email: "" });
    }
  };

  const isFormEmpty =
    formData.username.trim() === "" || formData.email.trim() === "";

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')",
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center shadow-lg rounded-2xl overflow-hidden"
        >
          {/* Logo Section */}
          <div className="bg-[#05131f] w-[20vw] min-w-[220px] h-[65vh] flex justify-center items-center">
            <img src="/Logo.png" className="w-[70%]" />
          </div>

          {/* Form Section */}
          <div className="bg-blue-300 w-[40vw] min-w-[320px] h-[65vh] border-4 border-[#05131f] px-8 py-6 text-[#223040] flex flex-col justify-between rounded-r-2xl">
            <div>
              <h1 className="font-bold text-3xl mb-3">Welcome</h1>
              <h3 className="text-sm mb-3">Please Enter Your Details</h3>

              <h2 className="font-semibold">Username</h2>
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                type="text"
                className="px-2 py-1 mt-1 mb-3 rounded-md border border-[#223040] focus:outline-none w-full"
              />

              <h2 className="font-semibold">Email</h2>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="px-2 py-1 mt-1 mb-3 rounded-md border border-[#223040] focus:outline-none w-full"
              />

              {errorMessage && (
                <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isFormEmpty}
              className={`font-bold rounded-md w-full py-2 text-center transition-colors ${
                isFormEmpty
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#223040] text-blue-300 hover:bg-[#1a2433] cursor-pointer"
              }`}
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
