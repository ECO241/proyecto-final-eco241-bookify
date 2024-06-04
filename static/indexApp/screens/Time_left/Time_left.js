const FECHA = new Date();

const fechareserva = FECHA.setDate(FECHA.getDate() + 7);


function cuentaAtras() {
console.log(FECHA);
const HOY = new Date().getTime();
const TIEMPO_RESTANTE = fechareserva - HOY;
const DIAS = Math.floor(TIEMPO_RESTANTE / (1000 * 60 * 60 * 24));
const HORAS = Math.floor((TIEMPO_RESTANTE / (1000 * 60 * 60)) % 24);
const MINUTOS = Math.floor((TIEMPO_RESTANTE / 1000 / 60) %60);
const SEGUNDOS = Math.floor((TIEMPO_RESTANTE / 1000) %60);
document.getElementById("countdown").innerHTML = `${DIAS}d ${HORAS}h ${MINUTOS}m ${SEGUNDOS}s`;


}
setInterval(cuentaAtras, 1000);