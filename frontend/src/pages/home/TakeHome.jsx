import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import TakeAttendance from '../../components/takeattendance/TakeAttendance'
import TopNavbar from '../../components/topnavbar/TopNavbar'



const TakeHome = () => {

  return (
    <div className='w-full bg-[#EDF1F5] flex '>   
    <Sidebar />
    <div className='flex-1'>
<TopNavbar/>
<TakeAttendance/>

    </div>

    </div>
  )
}

export default TakeHome