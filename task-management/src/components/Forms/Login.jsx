const Login = () => {
  return (
    <div className="relative h-screen w-full bg-[url('/Background7.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="flex">
          <div className="bg-[#05131f] w-[20vw] h-[60vh] rounded-l-2xl flex justify-center items-center">
            <img src="/Logo.png" className="w-[70%]" />
          </div>

          <div className="bg-blue-300 w-[40vw] h-[60vh] rounded-r-2xl border-4 border-[#05131f] px-8 py-6 text-[#223040]">
            <h1 className="font-bold text-3xl mb-3">Welcome</h1>
            <h3 className="text-sm mb-3">Please Enter Your Details</h3>

            <h2 className="font-semibold">Username</h2>
            <input
              type="text"
              className="px-2 py-1 mt-1 mb-3 rounded-md border border-[#223040] focus:outline-none focus:ring-0 w-full"
            />

            <h2 className="font-semibold">Password</h2>
            <input
              type="password"
              className="px-2 py-1 mt-1 mb-3 rounded-md border border-[#223040] focus:outline-none focus:ring-0 w-full"
            />

            <button className="bg-[#223040] font-bold text-blue-300 rounded-md w-full py-2 text-center mt-5 cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
