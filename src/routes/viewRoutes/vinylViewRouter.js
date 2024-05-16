import { Router } from "express";

import vinylViewController from "../../controllers/vinyl/vinylViewController.js";
import { isAdmin, hasSession } from "../../controllers/middlewares/authMiddleware.js";
const router = Router();

router.get("/",vinylViewController.getAll);
router.get("/new",isAdmin,vinylViewController.createForm);
router.post("/",isAdmin,vinylViewController.create);
router.get("/:id",vinylViewController.getById);
router.get("/:id/update",isAdmin,vinylViewController.updateForm);
//router.delete("/:id",vinylViewController.remove);
router.post("/:id/remove",isAdmin,vinylViewController.remove);
router.post("/add",hasSession, vinylViewController.addToCart);
router.post("/:id",isAdmin,vinylViewController.update);


export default router;
