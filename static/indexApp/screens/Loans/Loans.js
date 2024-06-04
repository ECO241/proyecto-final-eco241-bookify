async function getloans () {
    const loans = await fetch("http://localhost:3000/books/loans");
    const data = await loans.json();
    console.log(data);

    const dataloans = data.Loans;

    dataloans.forEach(book => {
        console.log(book.Book_id);
    });

    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")

    console.log(id)
}

getloans();