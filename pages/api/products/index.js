// pages/api/myfile.js

import fs from "fs";
import path from "path";
const nodeEnv = process.env.NODE_ENV;

export default function handler(req, res) {
  const filePath = path.join(
    process.cwd(),
    "products",
    `products.${nodeEnv}.json`
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(data);
}
