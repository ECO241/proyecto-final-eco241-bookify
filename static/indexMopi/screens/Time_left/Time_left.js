
async function bringtime() {
    const Loatime = await fetch("http://localhost:3000/books/loans");
    const data = await Loatime.json();
    console.log(data);
    const timee = data.Loans[0].created_at;
    
    const time = new Date(timee);
    console.log(time);

    response = time;
}





async function cuentaAtras() {
    
    const getid = new URLSearchParams(window.location.search);
    const id = getid.get("id");
    
    try{ const Loatime = await fetch("http://localhost:3000/books/loans/" + id );
    const info = await Loatime.json();
    console.log(info);
    const timee = info.created_at;
    console.log(timee)

    if (info.success) {
        const data = info.data;

        if (Array.isArray(data) && data.length > 0) {
            data.forEach(loan => {
                console.log(loan.created_at);
                const time = new Date(loan.created_at);
                const plusseven = time.setDate(time.getDate() + 7);
                
            
               
            
            const HOY = new Date().getTime();
            const TIEMPO_RESTANTE = plusseven - HOY;
            const DIAS = Math.floor(TIEMPO_RESTANTE / (1000 * 60 * 60 * 24));
            const HORAS = Math.floor((TIEMPO_RESTANTE / (1000 * 60 * 60)) % 24);
            const MINUTOS = Math.floor((TIEMPO_RESTANTE / 1000 / 60) %60);
            const SEGUNDOS = Math.floor((TIEMPO_RESTANTE / 1000) %60);
            document.getElementById("countdown").innerHTML = `${DIAS}d ${HORAS}h ${MINUTOS}m ${SEGUNDOS}s`;
              
            });
        } 
    }
   }catch (error) {
        console.error('Error:', error);
    }

}
setInterval(cuentaAtras, 1000);

const button = document.getElementById('button');
 function nextpage () {
    window.location.href = "/books1/thanks";
}

button.addEventListener('click', nextpage);