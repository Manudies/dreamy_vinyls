import { Router } from "express";

import vinylApiController from "../../controllers/user/vinylApiController.js";

const router = Router();


router.get("/",vinylApiController.getAll);
//router.post("/",vinylApiController.create);
router.get("/create",vinylApiController.create);
router.get("/:id",vinylApiController.getById);
//router.put("/:id",vinylApiController.update);
router.get("/:id/update",vinylApiController.update);
//router.delete("/:id",vinylApiController.remove);
router.get("/:id/remove",vinylApiController.remove);



export default router;
