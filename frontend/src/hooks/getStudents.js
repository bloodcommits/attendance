// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const useGetstudents = ({className , teacherId }) => {
//     // console.log(className , teacherId)
//     // const success =  handleInputErrors(className , teacherId);
//     // if(!success) return;

// 	const [students, setstudents] = useState([]);

//     const tempclassname = "class1";
//     const tempTeacherId = "65f97e108abfe78a296c5067"

// 	useEffect(() => {
// 		const getStudents = async () => {
// 			// setLoading(true);
// 			// try {
// 			// 	const res = await fetch("/api/class/addtoclass" , {
//             //         method: "GET",
// 			// 	headers: { "Content-Type": "application/json" },
// 			// 	body: JSON.stringify({ tempclassname , tempTeacherId }),
//             //     });
// 			// 	const data = await res.json();
//             //     console.log(data)
// 			// 	if (data.error) {
// 			// 		throw new Error(data.error);
// 			// 	}
// 			// 	setstudents(data);
// 			// } catch (error) {
// 			// 	toast.error(error.message);
// 			// } finally {
// 			// 	setLoading(false);
// 			// }
//             console.log("hello")
// 		};

// 		getStudents();
// 	}, []);

//     // const students = []

// 	return  students ;
// };
// export default useGetstudents;


// function handleInputErrors(className, teacherId) {
// 	if (!className || !teacherId) {
// 		toast.error("Please fill in all fields");
// 		return false;
// 	}

// 	return true;
// }

// export const hello = ({a , b})=>{
// console.log(a , b)
// }