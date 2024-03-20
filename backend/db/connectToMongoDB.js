import mongoose from "mongoose";

export const connectToMongoDB = async ()=>{
try{
await mongoose.connect(process.env.MONGO_DB_URI);
console.log("connected to mongo")
}catch(error){
console.error("not connected")
process.exit(0)
}

}