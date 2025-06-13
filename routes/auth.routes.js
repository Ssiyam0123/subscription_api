import { Router } from "express";
import { signUp } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp)
authRouter.post("/sign-in", (req, res) => {
  res.send({ title: "signin router" });
});
authRouter.post("/sign-out", (req, res) => {
  res.send({ title: "signout router" });
});


export default authRouter;