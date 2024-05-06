import { Router } from "express";

import vinylViewController from "../../controllers/user/vinylViewController.js";

const router = Router();


router.get("/",vinylViewController.getAll);
router.get("/new",vinylViewController.createForm);
router.post("/",vinylViewController.create);
router.get("/:id",vinylViewController.getById);
router.get("/:id/update",vinylViewController.updateForm);
router.post("/:id",vinylViewController.update);
//router.delete("/:id",vinylViewController.remove);
router.post("/:id/remove",vinylViewController.remove);



export default router;
