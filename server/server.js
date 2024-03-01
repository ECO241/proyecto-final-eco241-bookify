const express = require("express");
const app = express();
const PORT = 3003;

app.use(express.json());
app.use("/app", express.static("app"));

let books = [
  {
    Title: "The Great Gatsby",
    id: 1,
    loaned: false,
  },{
    Title: "The Catcher in the Rye",
    id: 2,
    loaned: false,
  },{
    Title: "To Kill a Mockingbird",
    id: 3,
    loaned: false,
  }]

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
