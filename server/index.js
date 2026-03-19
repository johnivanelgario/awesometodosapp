require("dotenv").config();
const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./database");

const app = express();

app.use(express.json());

// API routes first
const router = require("./routes");
app.use("/api", router);

// Serve frontend files
app.use(express.static(path.join(__dirname, "dist")));

// Fallback for frontend routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 5000;

const startServer = async () => {
  await connectToMongoDB();
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
};

startServer();