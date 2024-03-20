import express from "express"
import { addToClass, getstudents, takehomestudents } from "../controllers/class.controller.js";
// import protectRoute from "../middleware/protectRoute.js";

const classRoute = express.Router();

// childRoutes.get("/create/", protectRoute  , createChild )

classRoute.post("/addtoclass" , addToClass )
classRoute.get("/getstudents" , getstudents )
classRoute.get("/getstudents/:id" , takehomestudents )

export default classRoute;