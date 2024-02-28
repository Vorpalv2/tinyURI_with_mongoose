import "dotenv/config";
import express from "express";
import { connectToDB } from "./database.js";
import { urlroute } from "./routes/url.route.js";
import { staticRouter } from "./routes/static.route.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/url", urlroute);
app.use("/", staticRouter);

app.listen(process.env.PORT, () => {
  console.log("server is running on PORT ", process.env.PORT);
  connectToDB()
    .then(() => console.log("Connected To Database"))
    .catch((err) => {
      throw new Error(err);
    });
});

export { app };
