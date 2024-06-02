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
        flex-direction: column;
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .cover-container {
        width: 100%;
        height: 200px;
        overflow: hidden;
        border-radius: 10px;
        }

        .cover {
        width: 100%;
        height: auto;
        }

        .info {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        }

        .title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 5px;
        }

        .author {
        font-size: 1em;
        margin-bottom: 10px;
        }

        .edition {
        background-color: #ffc107;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: bold;
        margin-bottom: 5px;
        }

        .days-left {
        font-size: 1em;
        }
    </style>

    <div class="cover-container">
        <img class="cover" src="${this.getAttribute('cover-src')}" alt="">
    </div>
    <div class="info">
        <h2 class="title">${this.getAttribute('title')}</h2>
        <p class="author">${this.getAttribute('author')}</p>
        <p class="edition">${this.getAttribute('edition')}</p>
        <p class="days-left">${this.getAttribute('days-left')}</p>
    </div>
    `;
}
}

customElements.define('book-card', BookCard);