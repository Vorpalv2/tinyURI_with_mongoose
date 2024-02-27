import "dotenv/config";
import express from "express";
import { connectToDB } from "./database.js";
import { urlroute } from "./routes/url.route.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/url", urlroute);

app.listen(process.env.PORT, () => {
  console.log("server is running on PORT ", process.env.PORT);
  connectToDB()
    .then(() => console.log("Connected To Database"))
    .catch((err) => {
      throw new Error(err);
    });
});

export { app };
