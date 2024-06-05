

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
        :host {
        display: flex;
        flex-direction: row;
        width: 319px;
        height: 166px;
        background-color: #E5E9EB;
        border-radius: 19px;
        padding: 10px;
        margin-left: 9px;
        margin-top: 18px;
        }

        .cover-container {
        width: 32%;
        height: 210px;
        overflow: hidden;
        border-radius: 10px;
        padding-top: 12px;
        padding-left: 12px;
        }

        .cover {
        width: 100%;
        height: auto;
        }

        .info {
        flex-direction: column;
        margin-left: 16px;
        margin-top: 15px;
        }

        .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 5px;
        }

        .author {
        font-size: 1em;
        margin-top: -5px;
        }

        .edition {
        background-color: #ffc107;
        color: #004d6b;
        padding: 5px 10px 5px 10px;
        border-radius: 20px;
        font-weight: bold;
        margin-bottom: ;
        width: 70px;
        
        }

    </style>

    <div class="cover-container">
    <img class="cover" src="${this.getAttribute('cover-src')}" alt="">
    </div>
    <div class="info">
        <h2 class="title">${this.getAttribute('title')}</h2>
        <p class="author">${this.getAttribute('author')}</p>
        <p class="edition">${this.getAttribute('edition')}</p>
    </div>
    `;
}
}

function gotodetailwithid(id){
    window.location.href = "/screens/Detail?id=" + id;
}

async function getinfo() {
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");

        let response = await fetch('http://localhost:3000/books/books/' + id);
        let data = await response.json();
        // Change 'books' to 'Book'
        
        console.log('Fetched data:', data); // Debugging line
        const getfetechetdata = data.data;
        const getcero = getfetechetdata[0];
        
        console.log(getcero);
        
        if (getcero) { // Check if 'book' exists
            const bookCard = document.createElement('book-card');
            bookCard.setAttribute('title', getcero.Name);
            bookCard.setAttribute('author', getcero.Author);
            bookCard.setAttribute('edition', getcero.Edition);
            bookCard.setAttribute('cover-src', getcero.Cover);
            bookCard.addEventListener('click', () => gotodetailwithid(getcero.id));
            document.body.appendChild(bookCard);
        } else {
            console.error('Expected a book but got:', data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getinfo();




customElements.define('book-card', BookCard);