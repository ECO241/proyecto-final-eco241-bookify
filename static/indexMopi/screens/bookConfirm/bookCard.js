class BookCard extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: 'open' });
}

connectedCallback() {
    this.render();
}



render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="/static/indexMopi/screens/bookConfirm/bookConfirm.css">

    <div class="cover-container">
        <img class="cover" src="${this.getAttribute('cover-src')}" alt="">
    </div>
    <div class="info">
        <h2 class="title">${this.getAttribute('title')}</h2>
        <p class="author">${this.getAttribute('author')}</p>
        <span  class="edition">${this.getAttribute('edition')}</span>
    </div>
    `;
}
}

async function getinfo() {
    try {
        let response = await fetch('http://localhost:3000/books/books');
        let data = await response.json();
        let books = data.Books;
        
        console.log('Fetched data:', data); // Debugging line
        
        if (Array.isArray(books)) {
            books.forEach(book => {
                const bookCard = document.createElement('book-card');
                bookCard.setAttribute('title', book.Name);
                bookCard.setAttribute('author', book.Author);
                bookCard.setAttribute('edition', book.Edition);
                bookCard.setAttribute('cover-src', book.Cover);
                document.body.appendChild(bookCard);
            });
        } else {
            console.error('Expected an array but got:', books);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getinfo();

customElements.define('book-card', BookCard);