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
        <img class="cover" src="${this.getAttribute('cover-src')}" alt="" height="70">
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
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");

        let response = await fetch('http://localhost:3000/books/books/' + id);
        let data = await response.json();
        // Change 'books' to 'Book'
        
        console.log('Fetched data:', data); // Debugging line
        const getfetechetdata = data.data;
        const getcero = getfetechetdata[0];
        console.log(getcero);
        
        if (Array.isArray(getfetechetdata)) {
            getfetechetdata.forEach(getcero => {
                const bookCard = document.createElement('book-card');
                const container = document.getElementById('containercards');
                bookCard.setAttribute('title', getcero.Name);
                bookCard.setAttribute('author', getcero.Author);
                bookCard.setAttribute('edition', getcero.Edition);
                bookCard.setAttribute('cover-src', getcero.Cover);
                document.body.appendChild(bookCard)
                container.appendChild(bookCard);
            });
        } else {
            console.error('Expected an array but got:', data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getinfo();

customElements.define('book-card', BookCard);