import { Router } from "express";

import userApiRouter from "./userApiRouter.js";
import vinylApiRouter from "./vinylApiRouter.js";
import cartApiRouter from "./cartApiRouter.js";
import genreApiRouter from "./genreApiRouter.js";

const router = Router();

router.use("/user",userApiRouter);
router.use("/vinyl",vinylApiRouter);
router.use("/cart",cartApiRouter);
router.use("/genre",genreApiRouter);

export default router;