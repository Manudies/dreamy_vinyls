import { Router } from "express";

import userViewController from "../../controllers/user/userViewController.js";

const router = Router();

router.get("/register",userViewController.registerForm);
router.post("/register",userViewController.register);
router.get("/login",userViewController.loginForm);
router.post("/login",userViewController.login);
router.get("/users",userViewController.getAll);
router.post("/logout",userViewController.logout);

router.get("/",userViewController.getAll);
router.get("/new",userViewController.createForm);
router.post("/",userViewController.create);
router.get("/:id",userViewController.getById);
router.get("/:id/update",userViewController.updateForm);
router.post("/:id",userViewController.update);
//router.delete("/:id",userViewController.remove);
router.post("/:id/remove",userViewController.remove);



export default router;

