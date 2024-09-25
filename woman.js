const express = require("express");
const router = express.Router();

const app = express();
const port = 3333;

function showWoman(request, response) {
  response.json({
    name: "Simara Conceição",
    image: "https://github.com/simaraconceicao.png",
    bio: "Developer and Instructor",
  });
}

function showPort() {
  console.log("Server created and running on port", port);
}

app.use(router.get("/woman", showWoman));
app.listen(port, showPort);
