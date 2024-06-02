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
        margin-left: 15px;
        margin-top: -15px;
        }

        .title {
        font-size: 20px;
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
        font-size: 1em
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