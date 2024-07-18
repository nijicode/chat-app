import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSideBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/user", protectRoute, getUsersForSideBar);

export default router;
