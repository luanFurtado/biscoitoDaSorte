const frasesDaSorte = [
  "A vida é boa para quem nunca desiste",
  "Apesar das dificuldades nunca se renda",
  "Somanete os fortes sobrevivem, stay strong",
  "Apesar das dificuldades, nadar contra a maré sempre trás bons peixes",
  "Essa noite promete uma surpresa boa"
];


const buttonTry = document.querySelector("#btnTry")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const buttonRetry = document.querySelector("#btnRetry")

const newPhrase = document.querySelector("#fraseDaSorte")

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  num = (Math.floor(Math.random() * 5)) 
  newPhrase.innerHTML = frasesDaSorte[num]
}

buttonTry.addEventListener("click", toggleScreen)

buttonRetry.addEventListener("click", toggleScreen)



