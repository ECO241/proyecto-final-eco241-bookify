async function getbooks() {
    const query = await fetch(`http://localhost:3003/books`);
    const data = await query.json();
    return data;
}

async function displaybooks(books) {
    const list = document.createElement("ul");
    books.forEach((book) => {
        const item = document.createElement("li");
        item.textContent = book.Title;
        list.appendChild(item);
    });
    document.body.appendChild(list); // Add this line to append the list to the document body
}

document.getElementsByClassName("btn-loan")[0].addEventListener("click", async () => {
    const books = await getbooks();
    displaybooks(books);
});
