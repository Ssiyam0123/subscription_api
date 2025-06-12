import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "get all user data" });
});
userRouter.get("/:id", (req, res) => {
  res.send({ title: "get one user data" });
});
userRouter.post("/", (req, res) => {
  res.send({ title: "create user data" });
});
userRouter.put("/:id", (req, res) => {
  res.send({ title: "update user data" });
});
userRouter.delete("/", (req, res) => {
  res.send({ title: "delete user data" });
});

export default userRouter;
