import { Router } from "express";

import genreApiController from "../../controllers/genre/genreApiController.js";

const router = Router();


router.get("/",genreApiController.getAll);
//router.post("/",genreApiController.create);
router.get("/create",genreApiController.create);
router.get("/:id",genreApiController.getById);
//router.put("/:id",genreApiController.update);
router.get("/:id/update",genreApiController.update);
//router.delete("/:id",genreApiController.remove);
router.get("/:id/remove",genreApiController.remove);



export default router;
