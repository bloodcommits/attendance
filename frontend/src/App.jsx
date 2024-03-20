import Login from "./pages/login/Login";
import {
	Navigate,
  Route,
  Routes,
} from "react-router-dom";

import TakeHome from "./pages/home/TakeHome";
import FetchHome from "./pages/home/FetchHome";
import StudentFormHome from "./pages/home/StudentFormHome";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Signup from "./pages/signup/Signup";


function App() {
  const { authUser } = useAuthContext();
  return (

    <div className="">
      <Routes>
        <Route path="/" element={authUser?<TakeHome /> : <Navigate to={"/login"}/>} />
        <Route path="/fetchattendance" element={authUser?<FetchHome />  : <Navigate to={"/signup"}/>} />
        <Route path="/addstudent" element={authUser?<StudentFormHome /> : <Navigate to={"/signup"}/>} />
        <Route path="/login" element={authUser?<Navigate to={"/"}/>:<Login />} />
		<Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup/>} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
