import { Router } from "express";

import userViewRouter from "./userViewRouter.js";
import vinylViewRouter from "./vinylViewRouter.js";
import cartViewRouter from "./cartViewRouter.js";

const router = Router();


router.use("/user",userViewRouter);
router.use("/vinyl",vinylViewRouter);
router.use("/cart",cartViewRouter);

export default router;