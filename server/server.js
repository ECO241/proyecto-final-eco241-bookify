const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

let books = [{
    Name:"The Alchemist",
    description: "The Alchemist follows the journey of an Andalus",
    Code: 1,


}
]

app.get("/books", (req, res) => {
  res.send(books)});

  app.post("/books", (request, response) => {
    console.log(request.body);
    books.push(request.body);
    response.end();
  });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/app`)
})
