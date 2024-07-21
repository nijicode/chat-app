import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoute from "./routes/user.route.js";

import connectToDB from "./db/connectToDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
// app.get("/", (req, res) => {
//   res.send("Hello World!!");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToDB();
  console.log(`Server running on port ${PORT}`);
});
