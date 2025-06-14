import express from "express";

const app = express();

import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import authorize from "./middleware/auth.middleware.js";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", authorize, userRouter);
app.use("/api/v1/subscription", subscriptionRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("hi i am subscription api");
});

app.listen(PORT, async () => {
  console.log(`server is running on localhost:${PORT}`);
  await connectToDatabase();
});
