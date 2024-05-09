import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";
import  { isTokenCorrect } from "../../middlewares/authMiddleware.js";

const router = Router();

router.post("/register",userApiController.register);
router.post("login",userApiController.login);
router.get("/users",isTokenCorrect,userApiController.getAll);

router.get("/",userApiController.getAll);
//router.post("/",userApiController.create);
router.get("/create",userApiController.create);
router.get("/:id",userApiController.getById);
//router.put("/:id",userApiController.update);
router.get("/:id/update",userApiController.update);
//router.delete("/:id",userApiController.remove);
router.get("/:id/remove",userApiController.remove);



export default router;

