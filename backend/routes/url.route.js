import { Router } from "express";
import { shortGenerator } from "../controller/shorturlgenerator.controller.js";
import { url } from "../model/url.model.js";

const urlroute = Router();

urlroute.get(`/`, (req, res) => {
  res.json({ test: "Working" });
});

urlroute.post(`/`, shortGenerator);

urlroute.get(`/:shortid`, async (req, res) => {
  let shortid = req.params.shortid;
  console.log(shortid);
  let foundData = await url.findOneAndUpdate(
    { tinyurl: shortid },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  console.log(foundData);

  res.redirect(foundData?.redirecturl);
});

export { urlroute };
