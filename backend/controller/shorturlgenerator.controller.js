import { nanoid } from "nanoid";
import { url } from "../model/url.model.js";

async function shortGenerator(req, res) {
  let body = req.body.url;
  if (!body) return res.json({ "Error ": "Body cannot be empty" });
  if (!body.endsWith(".com") && !body.endsWith(".in"))
    return res.json({ Error: "Only .com or .in URLs Allowed" });

  await url.create({
    tinyurl: nanoid(4),
    redirecturl: body,
    timestamp: [],
  });

  res.redirect("/");
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
