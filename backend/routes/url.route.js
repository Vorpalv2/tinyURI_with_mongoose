import { Router } from "express";
import {
  shortGenerator,
  getAnalytics,
} from "../controller/shorturlgenerator.controller.js";
import { url } from "../model/url.model.js";

const urlroute = Router();

urlroute.post(`/`, shortGenerator);

urlroute.get(`/analytics/:shortID`, getAnalytics);

urlroute.get(`/:shortid`, async (req, res) => {
  let shortid = req.params.shortid;
  let foundData = await url.findOneAndUpdate(
    { tinyurl: shortid },
    {
      $push: {
        timestamp: { time: Date.now() },
      },
    }
  );

  res.redirect(foundData?.redirecturl);
});

export { urlroute };
