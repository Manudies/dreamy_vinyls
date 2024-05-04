import { Router } from "express";

import userApiController from "../../controllers/user/userApiController.js";

const router = Router();


router.get("/",userApiController.getAll);
//router.post("/",userApiController.create);
router.get("/create",userApiController.create);
router.get("/:id",userApiController.getById);
//router.put("/:id",userApiController.update);
router.get("/:id/update",userApiController.update);
//router.delete("/:id",userApiController.remove);
router.get("/:id/remove",userApiController.remove);



export default router;

