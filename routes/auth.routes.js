import { Router } from "express";
import { signIn, signUp } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp)
authRouter.post("/sign-in",signIn);
authRouter.post("/sign-out", (req, res) => {
  res.send({ title: "signout router" });
});


export default authRouter;