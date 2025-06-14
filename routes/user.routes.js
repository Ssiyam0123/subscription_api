import { Router } from "express";
import { getUser, getUsers } from "../controller/user.controllers.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);

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
