const express = require("express");
const router = express.Router();

const app = express();
const port = 3333;

function showHour(request, response) {
  const date = new Date();
  const hour = date.toLocaleTimeString("pt-BR");
  response.send(hour);
}

function showPort() {
  console.log("Server created and running on port", port);
}

app.use(router.get("/hour", showHour));
app.listen(port, showPort);
