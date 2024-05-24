const FECHA = new Date(2024, 4, 30, 9, 0, 0, 0);
function cuentaAtras() {
console.log(FECHA);
const HOY = new Date().getTime();
const TIEMPO_RESTANTE = FECHA - HOY;
const DIAS = Math.floor(TIEMPO_RESTANTE / (1000 * 60 * 60 * 24));
const HORAS = Math.floor((TIEMPO_RESTANTE / (1000 * 60 * 60)) % 24);
const MINUTOS = Math.floor((TIEMPO_RESTANTE / 1000 / 60) %60);
const SEGUNDOS = Math.floor((TIEMPO_RESTANTE / 1000) %60);
document.getElementById("countdown").innerHTML = `${DIAS}d ${HORAS}h ${MINUTOS}m ${SEGUNDOS}s`;

console.log(DIAS, HORAS, MINUTOS, SEGUNDOS);
}

setInterval(cuentaAtras, 1000);

