import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDB from "./db/connectToDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoute from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
// app.get("/", (req, res) => {
//   res.send("Hello World!!");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server running on port ${PORT}`);
});
