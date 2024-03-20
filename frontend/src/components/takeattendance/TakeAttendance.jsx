import React, { useEffect, useState } from "react";
import TopInput from "../topinputs/TopInput";
import StudentCard from "../card/StudentCard";
const TakeAttendance = () => {
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
    <div className="flex flex-col mt-5 mx-20 ">
      
        {/* 1 */}
        <TopInput lefttitle="Get Students" righttitle="Save date"/>
      

      {/* 2 */}
      <div className="flex items-start gap-5 flex-wrap ">
        {students.map((student)=>(
        <StudentCard key={student._id} name={student.studentName} className={student.className} />
        ))}

      
      </div>
    </div>
  );
};

export default TakeAttendance;
