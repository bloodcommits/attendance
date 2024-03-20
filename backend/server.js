import path from "path";
import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import { connectToMongoDB } from "./db/connectToMongoDB.js";
import classRoute from "./routes/class.routes.js";



// Intitalzing 
const app = express();
const PORT = process.env.PORT ||5000 ;
const __dirname = path.resolve();
//Middlewares
app.use(cors());
dotenv.config();
app.use(express.json())
app.use(cookieParser())

// Route
app.use("/api/auth" , authRoutes )
app.use("/api/class" , classRoute )

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});



//App listening
connectToMongoDB().then(()=>{

app.listen(5000 , ()=>{
    
    console.log(`running on port ${PORT}`)
})

})