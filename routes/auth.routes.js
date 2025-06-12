import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send({ title: "signup router" });
});
authRouter.post("/sign-in", (req, res) => {
  res.send({ title: "signin router" });
});
authRouter.post("/sign-out", (req, res) => {
  res.send({ title: "signout router" });
});


export default authRouter;