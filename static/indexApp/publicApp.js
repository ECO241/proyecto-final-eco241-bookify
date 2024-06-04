const button = document.getElementById("button");



function login() {
    const userid = document.getElementById("input1").value;
    const password = document.getElementById("input2").value;
    if (userid === "admin" && password === "admin") {
        window.location.href = "/screens/Loans";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
    
}

button.addEventListener("click", login );