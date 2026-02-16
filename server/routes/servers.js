
import express from "express";
import { getServers } from "../controllers/serversController.js";

const router = express.Router();

router.get("/", getServers);

export default router;
