import { Router } from "express";

import userViewRouter from "./userViewRouter.js";
import vinylViewRouter from "./vinylViewRouter.js";

const router = Router();


router.use("/user",userViewRouter);
router.use("/vinyl",vinylViewRouter);

export default router;