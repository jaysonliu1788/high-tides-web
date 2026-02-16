
import fs from "fs";
import path from "path";

const filePath = path.resolve("data/staff.json");

export const getStaff = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
};
