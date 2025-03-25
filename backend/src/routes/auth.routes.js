import express from "express";
import { Signup, Login, Logout } from "../controllers/auth.controller.js";

const router = express.Router();



//router simplified
router.get("/signup", Signup);
router.get("/login", Login);
router.get("/logout", Logout);






export default router;