import { Router } from "express";

import userViewRouter from "./userViewRouter.js";
import vinylViewRouter from "./vinylViewRouter.js";

const router = Router();


router.use("/artist",userViewRouter);
router.use("/vinyl",vinylViewRouter);

export default router;