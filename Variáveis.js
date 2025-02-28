/*
- > var    Sempre pode ser reescrito
- > let    Principal variável utilizada, pois não pode ser reescrita em um mesmo bloco,
           mas pode mudar dentro de outro bloco ( usar em vez do var)
- > const  Não pode ser reescrita em nenhuma possibilidade independente de onde for colocado

*/

var nome, sobrenome, nomeCompleto, idade;

nome = "Lucas";
sobrenome = "Santos";
idade = 30;
nomeCompleto = nome + " " + sobrenome;

soma = idade + 10;
pessoa = nome + " " +soma

document.getElementById("texto").innerHTML = pessoa;

// proxíma parte

var x = 1
var x = 2 // x foi reescrito
let c = 1 
const d = 1

{
    let x=2  // c foi reescrito neste bloco apenas
//  const = 2  d não pode ser reescrito mesmo estando em outro bloco
}

