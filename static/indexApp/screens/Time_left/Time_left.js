

async function bringtime() {
    const Loatime = await fetch("http://localhost:3000/books/loans");
    const data = await Loatime.json();
    console.log(data);
    const timee = data.Loans[0].created_at;
    
    const time = new Date(timee);
    console.log(time);

    response = time;
}



const FECHA = new Date();

const fechareserva = FECHA.setDate(FECHA.getDate() + 7);


async function cuentaAtras() {
    
    
    const Loatime = await fetch("http://localhost:3000/books/loans");
    const data = await Loatime.json();
    
    const timee = data.Loans[2].created_at;
    const time = new Date(timee);
    const plusseven = time.setDate(time.getDate() + 7);
    

   

const HOY = new Date().getTime();
const TIEMPO_RESTANTE = plusseven - HOY;
const DIAS = Math.floor(TIEMPO_RESTANTE / (1000 * 60 * 60 * 24));
const HORAS = Math.floor((TIEMPO_RESTANTE / (1000 * 60 * 60)) % 24);
const MINUTOS = Math.floor((TIEMPO_RESTANTE / 1000 / 60) %60);
const SEGUNDOS = Math.floor((TIEMPO_RESTANTE / 1000) %60);
document.getElementById("countdown").innerHTML = `${DIAS}d ${HORAS}h ${MINUTOS}m ${SEGUNDOS}s`;


}
setInterval(cuentaAtras, 1000);