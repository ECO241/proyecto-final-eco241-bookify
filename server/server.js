const express = require("express");
const app = express();
const PORT = 3030;

app.use(express.json());
app.use("/", express.static("app"));

let books = [];

async function showbooks() {
    const query = await fetch(`https://stephen-king-api.onrender.com/api/books`);
    const data = await query.json();
    books.push(data);
    console.log(books);
}

// Call the showbooks function
showbooks();


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
