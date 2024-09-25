const express = require("express");
const router = express.Router();

const app = express();
const port = 3333;

const women = [
  {
    name: "Simara Conceição",
    image: "https://github.com/simaraconceicao.png",
    bio: "Developer and Instructor",
  },
  {
    name: "Jessica Pinheiro",
    image: "https://avatars.githubusercontent.com/u/82549482?v=4",
    bio: "Frontend Developer",
  },
  {
    name: "Julia Albuquerque",
    image: "https://avatars.githubusercontent.com/u/93345010?v=4",
    bio: "Fullstack Developer",
  },
];

function showWomen(request, response) {
  response.json(women);
}

function showPort() {
  console.log("Server created and running on port", port);
}

app.use(router.get("/women", showWomen));
app.listen(port, showPort);
