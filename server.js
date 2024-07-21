const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Endpoint to get the authorization token
app.get("/get-auth-token", (req, res) => {
  const username = process.env.USER;
  const password = process.env.PASSWORD;
  const auth = btoa(`${username}:${password}`);
  res.json({ auth });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
