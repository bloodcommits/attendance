import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import FetchAttendance from '../../components/fetchattendance/FetchAttendance'
import TopNavbar from '../../components/topnavbar/TopNavbar'


const FetchHome = () => {
  return (
    <div className='w-full bg-[#EDF1F5] flex '>
         
    
    <Sidebar />

    <div className='flex-1'>
      <TopNavbar/>
    <FetchAttendance/>
    </div>

    </div>
  )
}

export default FetchHome