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
        <style>
            
            .book-card {
                display: flex;
                align-items: center;
                background-color: #f0f4f8;
                padding: 20px 10px 20px 20px;
                border-radius: 10px;
                margin-top: 20px;
            }
            .cover {
                width: 126px;
                height: 182px;
                margin-right: 20px;
                border-radius: 5px;
            }
            .info {
                text-align: left;
            }
            .title {
                margin: 0;
                font-size: 20px;
                color: #004D6B;
            }
            .author {
                margin: 5px 0;
                font-size: 18px;
                color: #004D6B;
            }
            .edition {
                display: inline-block;
                background-color: #fbc02d;
                color: #004D6B;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 15px;
            }
        </style>
        <div class="book-card">
            <img class="cover" src="${this.getAttribute('cover-src')}" alt="">
            <div class="info">
                <h2 class="title">${this.getAttribute('title')}</h2>
                <p class="author">${this.getAttribute('author')}</p>
                <p class="edition">${this.getAttribute('edition')}</p>
            </div>
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
                document.getElementById('book-card-container').appendChild(bookCard);
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

