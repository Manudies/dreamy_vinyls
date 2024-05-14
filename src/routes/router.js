import { Router } from "express";
import { isAdmin , hasSession } from "../controllers/middlewares/authMiddleware.js";
import apiRouter from "./apiRoutes/apiRouter.js";
import viewRouter from "./viewRoutes/viewRouter.js";
import vinylViewRouter from "./viewRoutes/vinylViewRouter.js"
import cartViewRouter from "./viewRoutes/cartViewRouter.js"


const router = Router();

//restriccion a pestañas
//router.use("/vinyl",isAdmin,vinylViewRouter);



router.use("/api",apiRouter);
router.use("/",viewRouter);




export default router;