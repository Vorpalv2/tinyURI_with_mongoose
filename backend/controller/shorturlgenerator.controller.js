import { nanoid } from "nanoid";
import { url } from "../model/url.model.js";

async function shortGenerator(req, res) {
  let body = req.body.url;

  let createdData = await url.create({
    tinyurl: nanoid(4),
    redirecturl: body,
    timestamp: [],
  });

  console.log(createdData);
  res.send(createdData);
}

async function getAnalytics(req, res) {
  const shortID = req.params.shortID;

  const Result = await url.findOne({ tinyurl: shortID });

  res.json({
    "Number of times clicked :": Result?.timestamp.length,
    "visited time :": Result.timestamp,
  });
}

export { shortGenerator, getAnalytics };
