async function users () {
    const response = await fetch("http://localhost:3000/books/users");
    const data = await response.json();
    const users = data.Users;
    console.log(data);
    
    // Check if users is an array
    

    const idstudent = document.getElementById("idstudent");
 

    let isLoginCorrect = false;

    users.forEach(user => {
        if (idstudent.value == user.idstuden) {
            isLoginCorrect = true;
        }
    });

    let idusuariologeado = null;

    if (isLoginCorrect) {
        console.log("Login correcto");
        idusuariologeado = users.find(user => idstudent.value == user.idstuden).id;
        const idDeUsuario = idusuariologeado;
        window.sessionStorage.setItem('idDeUsuario', idDeUsuario);
        
            window.location.href = 'scanerqr';
        
    } else {
        alert("Usuario no encontrado");
        console.log("Login incorrecto");
    }

    console.log(idusuariologeado);
}

button.addEventListener("click", users );