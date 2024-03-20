import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [email, setemail] = useState("");
	const [password, setPassword] = useState("");
	const{login} = useLogin()
	
	const handleSubmit=async(e)=>{
		e.preventDefault();
		// console.log(email , password)

		await login(email, password);

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
				Login
			  </h1>
			  <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
				
				<div>
				  <label
					
					class="block mb-2 text-sm font-medium text-white"
				  >
					 Email
				  </label>
				  <input
					type="email"
					class=" sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
					placeholder="name@company.com"
					onChange={(e)=>setemail(e.target.value)}
					value={email}
				  />
				</div>
				<div>
				  <label
					for="password"
					class="block mb-2 text-sm font-medium text-white"
				  >
					Password
				  </label>
				  <input
					type="password"
					placeholder="••••••••"
					class=" sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
					onChange={(e)=>setPassword(e.target.value)}
					value={password}
				  />
				</div>
				
				<button
				  type="submit"
				  class="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				>
				  Login
				</button>
				<p class="text-sm font-light text-gray-400">
				Do not have an account yet?{" "}
				  <Link
					to="/signup"
					class="font-medium  hover:underline text-[#2563eb]"
				  >
					Signup here
				  </Link>
				</p>
			  </form>
			</div>
		  </div>
		</div>
	  </section>
	);
};
export default Login;