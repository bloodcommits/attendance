import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import StudentForm from '../../components/studentform/StudentForm'
import TopNavbar from '../../components/topnavbar/TopNavbar'


const StudentFormHome = () => {
  return (
    <div className='w-full bg-[#EDF1F5] flex '>   
    
    <Sidebar />

    <div className='flex-1'>
    <TopNavbar/>

<StudentForm/>
    </div>

    </div>
    )
}

export default StudentFormHome
