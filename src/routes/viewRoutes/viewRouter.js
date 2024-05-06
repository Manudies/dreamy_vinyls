import { Router } from "express";

import userViewRouter from "./userViewRouter.js";

const router = Router();


router.use("/user",userViewRouter);

export default router;