import { Router } from "express";

import genreViewController from "../../controllers/genre/genreViewController.js";
import { isAdmin } from "../../controllers/middlewares/authMiddleware.js";
const router = Router();

router.get("/",isAdmin,genreViewController.getAll);
router.get("/new",isAdmin,genreViewController.createForm);
router.post("/",isAdmin,genreViewController.create);
router.get("/:id",isAdmin,genreViewController.getById);
router.get("/:id/update",isAdmin,genreViewController.updateForm);
router.post("/:id",isAdmin,genreViewController.update);
//router.delete("/:id",genreViewController.remove);
router.post("/:id/remove",isAdmin,genreViewController.remove);

export default router;
