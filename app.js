const express = require("express");
const app = express();
const port = 8080;

// Root route
app.get("/", (req, res) => {
  return res.send("Hello World! From Raipur!");
});

// Route that works fine
app.get("/success", (req, res) => {
  return res.send("This route works perfectly!");
});

// Route that throws an error
app.get("/error", (req, res) => {
  throw new Error("This is an intentional error for logging purposes.");
});

// Route with a parameter that throws an error if the parameter is not a number
app.get("/number/:num", (req, res) => {
  const num = parseInt(req.params.num, 10);
  if (isNaN(num)) {
    throw new Error("The provided parameter is not a number.");
  }
  return res.send(`The number is ${num}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
