const express = require("express");
const mongooseConnection = require("./models/MoongooseConnection");
const app = express();
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:3000",
  // Add more origins as needed
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Parse JSON requests
app.use(express.json());

// Define API routes
app.use("/api", require("./routes/admin"));
app.use("/api", require("./routes/responses"));
app.use("/api", require("./routes/interaction"));
app.use("/api", require("./routes/changelog"));



app.get("/", async (req, res) => {
    res.send("harsh");
  });
  
  // Start the server on port 5000
  app.listen(5000, () => {
    console.log("Listening on port 5000");
  });
  