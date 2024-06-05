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
    <link rel="stylesheet" href="/static/indexMopi/screens/bookConfirm/bookConfirm.css">

    
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

let loancreada = localStorage.getItem('loancreada') || 6;

async function newloan() {
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const response = await fetch('http://localhost:3000/books/Loanspost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: loancreada,
                created_at: new Date().toISOString(),
                Book_id: id,
                
            })
        });

        const data = await response.json();
        console.log('New loan:', data);
        loancreada++;
        localStorage.setItem('loancreada', loancreada);
        window.location.replace('/books1/thanks');
    } catch (error) {
        console.error('Error creating a new loan:', error);
    }
}

const button = document.getElementById('button');
button.addEventListener('click', newloan);



customElements.define('book-card', BookCard);