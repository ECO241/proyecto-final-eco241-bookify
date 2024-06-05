const button = document.getElementById("button");

async function gotohome () {
    window.location.href = "/indexApp";
}

button.addEventListener("click", gotohome );