
import fs from "fs";
import path from "path";

const filePath = path.resolve("data/players.json");

export const getPlayers = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
};

export const addPlayer = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const newPlayer = { id: Date.now(), ...req.body };
  data.push(newPlayer);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(201).json(newPlayer);
};
