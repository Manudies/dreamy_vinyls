import { Router } from "express";

import cartApiController from "../../controllers/cart/cartApiController.js";

const router = Router();


router.get("/",cartApiController.getAll);
//router.post("/",cartApiController.create);
router.get("/create",cartApiController.create);
router.get("/:id",cartApiController.getById);
//router.put("/:id",cartApiController.update);
router.get("/:id/update",cartApiController.update);
//router.delete("/:id",cartApiController.remove);
router.get("/:id/remove",cartApiController.remove);



export default router;

