import { Router } from "express";
import { url } from "../model/url.model.js";
import { user } from "../model/user.model.js";

const staticRouter = Router();

staticRouter.get(`/`, async (req, res) => {
  const result = await url.find({});

  res.render("homepage", { data: result });
});

staticRouter.get(`/register`, (req, res) => {
  res.render("register");
});

staticRouter.post(`/register`, async (req, res) => {
  const { username, password, email } = req.body;
  const createdUser = await user.create({
    username,
    password,
    email,
  });
  res.status(200).send(createdUser);
});

export { staticRouter };
