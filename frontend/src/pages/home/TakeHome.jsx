import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import TakeAttendance from '../../components/takeattendance/TakeAttendance'
import TopNavbar from '../../components/topnavbar/TopNavbar'



const TakeHome = () => {
  const [students, setstudents] = useState([]);
  // const className = "class1";
  // const teacherId = "65f97e108abfe78a296c5067";
  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await fetch("/api/class/getstudents");
        const data = await res.json();
        // console.log(data);
        if (data.error) {
          throw new Error(data.error);
        }
        setstudents(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getStudents();
  }, []);
  console.log(students)
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