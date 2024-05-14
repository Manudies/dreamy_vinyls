import { Router } from "express";
import { isAdmin } from "../controllers/middlewares/authMiddleware.js";
import apiRouter from "./apiRoutes/apiRouter.js";
import viewRouter from "./viewRoutes/viewRouter.js";
import userViewRouter from "./viewRoutes/userViewRouter.js"

const router = Router();

//restriccion a pestañas
router.use("/user/login",isAdmin,userViewRouter);


router.use("/api",apiRouter);
router.use("/",viewRouter);




export default router;