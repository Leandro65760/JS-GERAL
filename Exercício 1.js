function MostrarHora(){
  let Hora = new Date()
  console.log(`Agora são : ${Hora.toLocaleTimeString()}`)
}
MostrarHora()

function mensagem(){
  console.log('Ola, como vai?')
}
mensagem()

function cumprimentar(nome){
  console.log(`Ola ${nome}`)
}
cumprimentar('amanda')

console.log("================= EXERCICIOS =================")
console.log("1) Declare tres variaveis diferentes, atribua valores a elas e exiba o tipo de cada variavel no console:")

let string = "Leandro"
let int = 10
let booleano = true 

console.log(`${string} é uma ${typeof string}`)
console.log(`${int} é um ${typeof int}`)
console.log(`${booleano} é um ${typeof booleano}`)

console.log("2) Escreva um código que calcule a media de tres notas e Retorne se o aluno foi aprovado ou não: ")

let nota1 = 9
let nota2 = 4
let nota3 = 10

let media = nota1 + nota2 + nota3
let resultado = (media/3)
if (resultado > 6) {
  console.log('Aluno aprovado com média : ' + resultado)
}
else {
  console.log('Aluno reporvado com nota : '+ resultado)
}

console.log("3)Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.")

function chovendo(){
  let chovendo = true
  if(chovendo){
    console.log('Leve um guarda-chuva')
  }
  else{
    console.log('Não é preciso levar um guarda-chuva')
  }
}

console.log("4) Crie uma função que dobre o numero inserido: ")

function drobar(numero){
  console.log(numero*2)
}
console.log("O dobro de 8 é: ")
drobar(8)

console.log("Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.")

function idade(idade){
  if(idade >= 18){
    console.log('Maior de idade') }
  else {
    console.log('Menor de idade')
    }
  }

idade(20)  

console.log("6) Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.")

function saudacao(nome){
  console.log(`Ola ${nome}`)
}

saudacao('Amanda')