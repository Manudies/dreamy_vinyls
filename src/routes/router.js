import { Router } from "express";
import { isAdmin } from "../controllers/middlewares/authMiddleware.js";
import apiRouter from "./apiRoutes/apiRouter.js";
import viewRouter from "./viewRoutes/viewRouter.js";
import vinylViewRouter from "./viewRoutes/vinylViewRouter.js"

const router = Router();


router.use("/vinyl",isAdmin,vinylViewRouter);

router.use("/api",apiRouter);
router.use("/",viewRouter);




export default router;