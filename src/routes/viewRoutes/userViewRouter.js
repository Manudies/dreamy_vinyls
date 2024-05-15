import { Router } from "express";

import userViewController from "../../controllers/user/userViewController.js";
import { isAdmin } from "../../controllers/middlewares/authMiddleware.js";
const router = Router();

router.get("/register",userViewController.registerForm);
router.post("/register",userViewController.register);
router.get("/login",userViewController.loginForm);
router.post("/login",userViewController.login);
router.get("/users",userViewController.getAll);
router.post("/logout",userViewController.logout);

router.get("/",isAdmin,userViewController.getAll);
router.get("/new",isAdmin,userViewController.createForm);
router.post("/",isAdmin,userViewController.create);
router.get("/:id",isAdmin,userViewController.getById);
router.get("/:id/update",isAdmin,userViewController.updateForm);
router.post("/:id",isAdmin,userViewController.update);
//router.delete("/:id",userViewController.remove);
router.post("/:id/remove",isAdmin,userViewController.remove);



export default router;

