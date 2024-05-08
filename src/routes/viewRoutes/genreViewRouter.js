import { Router } from "express";

import genreViewController from "../../controllers/genre/genreViewController.js";

const router = Router();


router.get("/",genreViewController.getAll);
router.get("/new",genreViewController.createForm);
router.post("/",genreViewController.create);
router.get("/:id",genreViewController.getById);
router.get("/:id/update",genreViewController.updateForm);
router.post("/:id",genreViewController.update);
//router.delete("/:id",genreViewController.remove);
router.post("/:id/remove",genreViewController.remove);



export default router;
