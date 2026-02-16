
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import playersRoutes from "./routes/players.js";
import serversRoutes from "./routes/servers.js";
import staffRoutes from "./routes/staff.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/players", playersRoutes);
app.use("/api/servers", serversRoutes);
app.use("/api/staff", staffRoutes);

app.get("/", (req, res) => {
  res.json({ message: "High Tides Pro API running 🚀" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
