import "reflect-metadata";
import "dotenv/config";
import express from "express";

import dataSource from "./configs/database";
import loadRoutes from "./infrastructure/server";

const app = express();
const port = 3008;

app.use(express.json());

const run = async () => {
  try {
    await dataSource.initialize();
    console.log("--- Database connected ---");

    loadRoutes(app);

    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log("App Error", error);
  }
};

run();
