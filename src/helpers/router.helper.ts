import { Application } from "express";
import { existsSync, readdirSync } from "fs";
import path from "path";

const routerHandler = (app: Application) => {
  //find all the folder in the app directory and import all the routes
  const allFolders = readdirSync(path.join(__dirname, "..", "routes"));

  allFolders.forEach((file) => {
    console.log(path.join(__dirname, "..", "routes", file));

    //if route file present then import it
    if (
      existsSync(path.join(__dirname, "..", "routes", file)) ||
      existsSync(path.join(__dirname, "..", "routes", file))
    ) {
      const router = require(path.join(__dirname, "..", "routes", file));

      app.use("/api/v1/" + file?.split(".")?.at(0), router.default);
    }
  });
};

export default routerHandler;
