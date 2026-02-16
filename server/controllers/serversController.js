
import fs from "fs";
import path from "path";

const filePath = path.resolve("data/servers.json");

export const getServers = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
};
