import fs from "fs";
import path from "path";

export const getProducts = () => {
  const nodeEnv = process.env.NODE_ENV;
  const filePath = path.join(
    process.cwd(),
    "products",
    `products.${nodeEnv}.json`
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
};
