import { Router } from "express";

import cartViewController from "../../controllers/cart/cartViewController.js";
import { isAdmin, hasSession } from "../../controllers/middlewares/authMiddleware.js";

const router = Router();

router.get("/",hasSession, cartViewController.getAll);
// router.get("/new",isAdmin,cartViewController.createForm);
// router.post("/",isAdmin,cartViewController.create);
router.get("/:id",hasSession,cartViewController.getById);
router.get("/:id/update",isAdmin,cartViewController.updateForm);
router.post("/:id",isAdmin,cartViewController.update);
//router.delete("/:id",cartViewController.remove);
router.post("/:id/remove",isAdmin,cartViewController.remove);

export default router;

