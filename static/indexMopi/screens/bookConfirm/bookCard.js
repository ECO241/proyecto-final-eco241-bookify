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

customElements.define('book-card', BookCard);