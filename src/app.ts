import bodyParser from "body-parser";
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { Bootstrap, find } from "./bootstrap";
import { routes as apiRoutes } from "./routes/index";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", apiRoutes);
app.get("/", (req, res) => {
  res.send("typeorm-practice 서버 가동중🚀");
});

AppDataSource.initialize()
  .then(async () => {
    await Bootstrap().catch((err) => {
      console.log(err);
    });
    await find().catch((err) => {
      console.log(err);
    });
  })
  .catch((err) => console.log(err));

export { app };
