import { Router } from "express";
import userApiController from "../controllers/user/userApiController.js";
import { isTokenCorrect, hasSession, isAdmin } from "../controllers/middlewares/authMiddleware.js";


const router = express.Router();

router.get("/", isTokenCorrect, hasSession, isAdmin. getAll);

router.get("/:id", isTokenCorrect, hasSession, isAdmin. getById);

router.get("create", isTokenCorrect, hasSession, isAdmin. create);

router.get("/:id/update", isTokenCorrect, hasSession, isAdmin. update);

router.get("/:id/remove", isTokenCorrect, hasSession, isAdmin. remove);

export default router;