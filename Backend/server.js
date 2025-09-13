import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
import cors from "cors";
import process from "process";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 7000;
const MONGO_URI =
  process.env.mongo_uri ||
  "mongodb+srv://narilucky4:nari@cluster1.kvjwoc0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB successfully connected..");
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch(() => {
    console.log("MongoDB connection failed!!");
    process.exit(1);
  });
