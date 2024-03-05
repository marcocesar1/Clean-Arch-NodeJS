import { Express, Response } from "express";
import router from "./routes";

const loadRoutes = (app: Express) => {
  app.use("/v1", router);

  app.get("/", (_, res: Response) => {
    res.send("Welcome!");
  });
};

export default loadRoutes;
