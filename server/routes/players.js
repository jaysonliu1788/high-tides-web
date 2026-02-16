
import express from "express";
import { getPlayers, addPlayer } from "../controllers/playersController.js";

const router = express.Router();

router.get("/", getPlayers);
router.post("/", addPlayer);

export default router;
