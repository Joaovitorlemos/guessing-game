// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
const inputNumber = document.querySelector("#inputNumber")

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)

// Funções
function handleTryClick(event) {
  event.preventDefault() // Não faça o padrão

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
    screen2.querySelector(".drawnNumber").innerText = `O número sorteado foi o: ${randomNumber}`
  }

  if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert(`O número deve ser entre 0 à 10.`)
  }
  
  if(inputNumber.value == "") {
    xAttempts--
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function pressEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}