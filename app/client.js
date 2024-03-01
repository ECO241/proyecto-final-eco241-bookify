async function getUser(){
    const query = await fetch('http://localhost:3003/user')
    const data = await query.json()
    return(data)
}

const btn = document.getElementById("btn-sign")

const inputs = document.getElementsByClassName("sign-up")

let users = {
    user: "",
    pass: ""
}

async function sendUser(){
    const box = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(users)
    }
    fetch ("http://localhost:3003/user", box)
}
btn.addEventListener("click", async () => {
    users = {
        user: inputs[0].value,
        pass: inputs[1].value,
    }
    console.log(users)
    await sendUser()
})

btn.addEventListener("click", ()=>{
    window.location.replace("http://localhost:3003/app/screens/loan.html?")
} )