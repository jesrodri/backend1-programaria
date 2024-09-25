const express = require("express");
const router = express.Router();

const app = express();
const port = 3333;

function showHello(request, response) {
  response.send("Hello, world!");
}

function showPort() {
  console.log("Server created and running on port", port);
}

app.use(router.get("/hello", showHello));
app.listen(port, showPort);
