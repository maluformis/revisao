// criar variaveis

//let nome= "Malu Formis"
let idade= 16
let idadeNamorado = "19"
const anoNascimento= 2007

// decisão 

if (idade === idadeNamorado) {
   alert("Igual...")
}else {
   alert("cada um no seu quadrado")
}

// Lendo informações do HTML 

const titulo = document.getElementById("titulo")
const resultado = document.getElementById("resultado")

const nome =  document.getElementById("nome")
const email = document.getElementById("email")


console.log(titulo)

titulo.textContent = "Mudei o título! Eu posso..."



function mostrarResultado() {
    titulo.style.color = "orange"
    resultado.textContent = nome.value + " " + email.value
   
}