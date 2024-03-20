import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup"

const Signup = () => {
  const {loading , signup} = useSignup();
    const [input , setinput] = useState({
     fullName:"",
     email:"",
     password:"",
     confirmPassword:"" 
    })
    const handleSubmit =async (e)=>{
      e.preventDefault();
      console.log("button")
     await signup(input)

    }
  return (
    <section class="bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/login"
          class="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          Attendance System
        </Link>

        <div class="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Create and account
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
          
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  class=" sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Person"
                  
                  onChange={(e)=>setinput({... input,fullName:e.target.value})}
                  value={input.fullName}
                />
              </div>
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                
                  class=" sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@company.com"
                  
                  onChange={(e)=>setinput({... input,email:e.target.value})}
                  value={input.email}
                />
              </div>
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  class=" sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  
                  onChange={(e)=>setinput({... input,password:e.target.value})}
                  value={input.password}
                />
              </div>
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  class=" sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  
                  onChange={(e)=>setinput({... input,confirmPassword:e.target.value})}
                  value={input.confirmPassword}
                />
              </div>
             
              <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  class="font-medium  hover:underline text-[#2563eb] "
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
