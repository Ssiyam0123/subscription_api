import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "get all subscritpion" });
});
subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "get one subscritpion details" });
});
subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "post subscritpion details" });
});
subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "update subscritpion details" });
});
subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete subscritpion" });
});
subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "get all user subscritpion" });
});
subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "cancel user subscritpion" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "upcoming - renewal" });
});

export default subscriptionRouter;
