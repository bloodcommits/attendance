import React, { useEffect, useState } from "react";
import StudnetStatus from "../studentstatus/StudnetStatus";
import toast from "react-hot-toast";
import FetchTopbar from "./FetchTopbar";

// hello(className , teacherId)
// console.log(className)

const FetchAttendance = () => {
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



  return (
    <div className="flex  flex-col mt-5 mx-20">
      <FetchTopbar/>
      <div className="flex flex-col gap-3">
        {students.map((student) => (

          <StudnetStatus key={student._id} name={student.studentName} status={student.status} />
        ))}
      </div>
    </div>
  );
};

export default FetchAttendance;
