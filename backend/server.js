const express = require("express");
const cors = require("cors");
const connectDb = require("./configs/db.config");
require("dotenv").config();

const routes = require("./routes/index.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api", routes);

// Start server
const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (err) {
    console.error("Server error:", err);
    process.exit(1);
  }
};

start();
