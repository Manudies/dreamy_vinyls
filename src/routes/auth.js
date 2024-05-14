import { Router } from "express";
import userApiController from "../controllers/user/userApiController.js";
import { isAdmin } from "../controllers/middlewares/authMiddleware.js";


const router = express.Router();

router.get("/",isAdmin. getAll);

router.get("/:id",isAdmin. getById);

router.get("create",isAdmin. create);

router.get("/:id/update",isAdmin. update);

router.get("/:id/remove",isAdmin. remove);

export default router;