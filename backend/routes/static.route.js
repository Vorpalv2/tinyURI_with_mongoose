import { Router } from "express";
import { url } from "../model/url.model.js";

const staticRouter = Router();

staticRouter.get(`/`, async (req, res) => {
  const result = await url.find({});

  res.render("homepage", { data: result });
});

export { staticRouter };
