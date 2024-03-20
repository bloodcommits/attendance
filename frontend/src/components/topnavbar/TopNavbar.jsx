import React from 'react'
import useLogout from "../../hooks/useLogout.js";
const TopNavbar = () => {
  const { loading, logout } = useLogout();
  return (
    <div className=' sticky  top-0 flex justify-between w-full bg-white drop-shadow-sm h-[80px] px-10 py-2.5 ' >

      <div className=' invisible'/>
      <button className='bg-red-400 h-12 px-5 py-7 items-center flex font-bold shadow-md rounded-md hover:bg-red-600' onClick={logout} >
        Logout
      </button>
      
    </div>
  )
}

export default TopNavbar