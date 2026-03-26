require("dotenv").config();
const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./database");

const app = express();

app.use(express.json());

// API routes
const router = require("./routes");
app.use("/api", router);

// Serve frontend files from server/dist
app.use(express.static(path.join(__dirname, "dist")));

// Fallback for frontend routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 10000;

const startServer = async () => {
  try {
    await connectToMongoDB();
    console.log("Connected to MongoDB");

    app.listen(port, "0.0.0.0", () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

startServer();