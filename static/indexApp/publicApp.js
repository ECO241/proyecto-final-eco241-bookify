const button = document.getElementById("button");

async function users () {
    const response = await fetch("http://localhost:3000/books/users");
    const data = await response.json();
    const users = data.Users;
    console.log(data);
    
    // Check if users is an array
    

    const idstudent = document.getElementById("input1");
    const password = document.getElementById("input2");

    let isLoginCorrect = false;

    users.forEach(user => {
        if (idstudent.value == user.idstuden && password.value == user.contraseña) {
            isLoginCorrect = true;
        }
    });

    let idusuariologeado = null;

    if (isLoginCorrect) {
        console.log("Login correcto");
        idusuariologeado = users.find(user => idstudent.value == user.idstuden && password.value == user.contraseña).Loans;
        window.location.href = "/screens/Loans/?id=" + idusuariologeado
    } else {
        console.log("Login incorrecto");
    }

    console.log(idusuariologeado);
}

button.addEventListener("click", users );