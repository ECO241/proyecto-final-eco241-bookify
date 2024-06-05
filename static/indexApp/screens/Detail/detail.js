const title = document.getElementById('Name');
const author = document.getElementById('Author');
const edition = document.getElementById('Edition');
const cover  = document.getElementById('cover');


const params = new URLSearchParams(window.location.search)
const id = params.get("id")

console.log(id)

async function getinfo(id) {
    try {
        let response = await fetch('http://localhost:3000/books/books/' + id);
        let data = await response.json();
        let book = data.data;
        let inside = book[0];
        console.log('Fetched data:', data); 
        console.log('Book:', book); 
        title.innerHTML=  inside.Name
        author.innerHTML=  inside.Author
        edition.innerHTML=  inside.Edition
        cover.src=  inside.Cover
        
  
    } catch (error) {
        console.error('Error:', error);
    }
}

async function cuentaAtras() {
    const Loatime = await fetch("http://localhost:3000/books/loans");
    const data = await Loatime.json();
    const timee = data.Loans[id-1].created_at;
    console.log(timee);
    const time = new Date(timee);
    const plusseven = time.setDate(time.getDate() + 7);

    const HOY = new Date().getTime();
    const TIEMPO_RESTANTE = plusseven - HOY;
    const DIAS = Math.floor(TIEMPO_RESTANTE / (1000 * 60 * 60 * 24));
    const HORAS = Math.floor((TIEMPO_RESTANTE / (1000 * 60 * 60)) % 24);
    const MINUTOS = Math.floor((TIEMPO_RESTANTE / 1000 / 60) % 60);
    const SEGUNDOS = Math.floor((TIEMPO_RESTANTE / 1000) % 60);
    document.getElementById("countdown").innerHTML = `${DIAS}d ${HORAS}h ${MINUTOS}m ${SEGUNDOS}s`;

    getinfo(id);
}

setInterval(cuentaAtras, 1000);

const button = document.getElementById('button');

button.addEventListener('click', async () => {
    window.location.href = "/screens/Renew";
});
