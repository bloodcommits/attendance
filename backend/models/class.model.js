import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
	{
		className: {
			type: String,
			// required: true,
		},
		teacherId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
			// required: true,
        },
        studentName:{
            type:String,
            // required:true
        },
        status:{
            type:String,
            // required:true,
        }, 
         dateField: {
            type: Date,
            // required: true
          }
	},
	{ timestamps: true }
);

const Classes = mongoose.model("Classes", classSchema);

export default Classes;