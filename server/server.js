const express = require("express");
const app = express();
const PORT = 3030;

app.use(express.json());
app.use("/", express.static("app"));

let books = [
  {
    Title: "The Great Gatsby",
    id: 1,
  },
];

app.get("/books", (req, res) => {
  res.send(books);
});

app.post("/books", (request, response) => {
  console.log(request.body);
  books.push(request.body);
  response.end();
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/app`);
});
