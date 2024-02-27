import { Router } from "express";
import { shortGenerator } from "../controller/shorturlgenerator.controller.js";

const urlroute = Router();

urlroute.get(`/`, (req, res) => {
  res.json({ test: "Working" });
});

urlroute.post(`/`, shortGenerator);

export { urlroute };
