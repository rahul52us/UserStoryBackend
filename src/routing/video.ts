import express from "express";
import { createVideo } from "../modules/videos/videos";
import authenticate from "../modules/config/authenticate";

const router = express.Router();

router.post("/create", authenticate, createVideo);

export default router;
