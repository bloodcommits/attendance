import Classes from "../models/class.model.js";


export const addToClass =async (req , res)=>{
try {
    const {className ,teacherId , studentName , status} = req.body;
    // console.log(teacherId)      
    const today = new Date().getUTCDate();
// today.setHours(0, 0, 0, 0); 
    const newstudentadd = new Classes({
        className:className,
		teacherId: teacherId,
        studentName:studentName,
        status:status,
        dateField: today
    });
    if(newstudentadd){
        await newstudentadd.save()
    }
    res.status(200).json({
        className:className,
        teacherId:teacherId,
        studentName:studentName,
        status:status
    });    

    
} catch (error) {
    console.log("Error in sendMessage", error.message)
    res.status(500).json({
        error:"internal error"
    })
}
}

export const getstudents=async(req , res)=>{
    try {
        const className = "class1"
        const teacherId = "65f97e108abfe78a296c5067"

        console.log(teacherId , className)
        const class1 =  await Classes.find({className:className, teacherId:teacherId})


        res.status(200).json(class1)
        
    } catch (error) {
        console.error("Internal error")
    }
}
export const takehomestudents = (req , res)=>{
    const { id } = req.params;
    // res.send('id: ' + req.query.id);


    res.status(200).json({
        id:id
    })


}