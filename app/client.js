async function getUser() {
  const query = await fetch("http://localhost:3003/user");
  const data = await query.json();
  localStorage.setItem("user", JSON.stringify(data));
  const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
}
;
const btn = document.getElementById("btn-sign");

const inputs = document.getElementsByClassName("sign-up");


let users = {
  user: "",
  pass: "",
};

async function sendUser() {
  const box = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(users),
  };
  fetch("http://localhost:3003/user", box);
}
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  users = {
    user: inputs[0].value,
    pass: inputs[1].value,
  };
  console.log(users);
  await sendUser();
  window.location.href = "/app/screens/loan.html";
});
