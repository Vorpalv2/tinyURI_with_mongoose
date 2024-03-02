import { Router } from "express";
import { url } from "../model/url.model.js";
import {
  handleLogin,
  handleSignup,
} from "../controller/handleruser.controller.js";

const staticRouter = Router();

staticRouter.get(`/`, async (req, res) => {
  if (!req.user) return res.redirect(`/`);
  const result = await url.find({ generatedBy: req.user._id });

  res.render("homepage", { data: result });
});

staticRouter.get(`/register`, (req, res) => {
  res.render("register");
});

staticRouter.get(`/login`, (req, res) => {
  res.render("login");
});

staticRouter.post(`/register`, handleSignup);

staticRouter.post(`/login`, handleLogin);

export { staticRouter };
