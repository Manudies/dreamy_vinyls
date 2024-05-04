import { Router } from "express";

import userApiRouter from "./userApiRouter.js";

const router = Router();


router.use("/user",userApiRouter);


export default router;