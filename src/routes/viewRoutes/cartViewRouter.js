import { Router } from "express";

import cartViewController from "../../controllers/cart/cartViewController.js";

const router = Router();


router.get("/",cartViewController.getAll);
router.get("/new",cartViewController.createForm);
router.post("/",cartViewController.create);
router.get("/:id",cartViewController.getById);
router.get("/:id/update",cartViewController.updateForm);
router.post("/:id",cartViewController.update);
//router.delete("/:id",cartViewController.remove);
router.post("/:id/remove",cartViewController.remove);



export default router;

