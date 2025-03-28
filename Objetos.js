// objeto
const estudante = {
    nome: "Leandro F",
    idade: 16,
    prontuario: 3045,
    turma: "Desenvolvimento Web",
    bolsista: true,
    telefone: [123456789, 12345674898],
    endereco: [{
        rua: "Rua Tupinambas" ,
        numero: '560',
        bairro: 'Santa Cruz'
    }]
}

console.log(typeof estudante) //tipo do obj

// acessar os dados
console.log(estudante.telefone)
console.log(estudante['idade']) // outra forma de chamar

// estudante.endereco = {
//     rua: "Rua Tupinambas" ,
//     numero: '560',
//     bairro: 'Santa Cruz'
// }

console.log(estudante.endereco.rua)


const chaveobj = Object.keys(estudante) 
console.log("", chaveobj) //retorna as propriedades com string

if(!chaveobj.includes("endereço")){
    console.error("É NECESSÁRIO INCLUIR UM ENDEREÇO")
}