import { Router } from "express";

import userViewRouter from "./userViewRouter.js";

const router = Router();


router.use("/artist",userViewRouter);

export default router;