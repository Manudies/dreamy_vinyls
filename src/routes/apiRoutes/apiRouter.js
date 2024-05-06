import { Router } from "express";

import userApiRouter from "./userApiRouter.js";

import vinylApiRouter from "./vinylApiRouter.js";

const router = Router();


router.use("/user",userApiRouter);
router.use("/vinyl",vinylApiRouter);

export default router;