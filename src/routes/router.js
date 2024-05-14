import { Router } from "express";
import { isAdmin } from "../controllers/middlewares/authMiddleware.js";
import apiRouter from "./apiRoutes/apiRouter.js";
import viewRouter from "./viewRoutes/viewRouter.js";

const router = Router();



router.use("/api",apiRouter);
router.use("/", viewRouter);


export default router;