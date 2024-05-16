import { Router } from "express";

import userViewRouter from "./userViewRouter.js";
import vinylViewRouter from "./vinylViewRouter.js";
import cartViewRouter from "./cartViewRouter.js";
import genreViewRouter from "./genreViewRouter.js";

const router = Router();

router.get("/", (req,res)=>{
    res.render("home")
})
router.use("/user",userViewRouter);
router.use("/vinyl",vinylViewRouter);
router.use("/cart",cartViewRouter);
router.use("/genre",genreViewRouter);

export default router;