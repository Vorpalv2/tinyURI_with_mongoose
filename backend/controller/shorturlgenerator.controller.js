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

export { shortGenerator };
