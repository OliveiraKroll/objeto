// const nome = "maria"
// const idade = 20
// const endereco = "Rua do bobo , numero 0"

// const usuarios = {

//     nome:"Maria",
//     idade:20,
//     endereco:["Rua do Bobo, numero 0",
// "Rua Qualquer, numero 120"]
// }

// // console.log(usuarios)

// // usuarios.nome = "Antonieta"

// // console.log(usuarios)
// // console.log(usuarios.nome)


// //1

// // const filme = {

// //     direcao:"Maria",
// //     nome: "Vingadores",
// //     anoLancamento:2016,
// //     elenco: ["Petter", "Thor", "Carol", "Natacha", "Thanos"],
// //     assistido:true
// // }



// // console.log(filme)
// // console.log(filme.direcao);
// // console.log(filme.nome);
// // console.log(filme["anoLancamento"]);
// // console.log(filme["elenco"]);
// // console.log(filme["assistido"]);



// //2

// const pessoa = {

//     nome: "Lucas",
//     idade:20,
//     generoMusical:"pagode",
    
// }



// console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} e gosta muito de ${pessoa.generoMusical}`)




// //2

// con endereco = 
// const pessoa = {

//     rua:"Rua do bobo",
//     cidade:"Sao leopoldo",
//     estado:"RS",
//     numero: 0,
// }

//     nome: "Lucas",
//     idade:20,
//     generoMusical:"pagode",
//     endereco:
// }



// console.log(
//     "O nome da pessoa é" ,pessoa.Nome,
//      "ela tem" ,pessoa.Idade, 
//      "anos e gosta muito de" ,pessoa.generoMusical);




// ///////////////////////////////////////////continuação - 09/05//////////////////////////////////////////////

// const endereco = {
//     rua:"Rua do bobo",
//     numero:0,
//     cidade:"São Leopoldo",
//     estado:"Rio Grande Do Sul",
// }
// endereco.cep = "047-824-150-55"

// const endereco2 = {
//  ...endereco,
//  cep:"21-32104"
// }

// const pessoa = {
//     nome:"Gabriel",
//     idade:25,
//     generoMusical: "MPB",
//     enderecoPessoa:[endereco,endereco2],
// }
// console.log(pessoa.enderecoPessoa[0].cidade);


// ex - interpretação de código

//1)

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"},
// 		],
// };

// console.log(filme.elenco[0]);
// console.log(filme.elenco[filme.elenco.length - 1]);
// console.log(filme.transmissoesHoje[2]);

//a) 
//Matheus Nachtergaele
//Virginia Cavendish
//"Canal Globo", horario: "14h"


// //2)

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// // a)
// idade: 3
// nome: "Juca"
// raca: "SRD"

// idade: 3
// nome: "Juba"
// raca: "SRD"

// idade: 3
// nome: "Jubo"
// raca: "SRD"


// b) copiar


// // 3)

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))


// console.log(Object.values(pessoa))

///= values verifica valores para ver se tem algum objeto vazio

// // a) false, undefined
// // b)backender é uma variável definida como false, e "altura" não consta no objeto


// // // ex. 1 - escrita de código

// // // Exemplo de entrada
// // const pessoa = {
// //     nome: "Vitor Hugo", 
// //     apelidos: ["Vitinho", "Vitão", "Vit"]
// //  }
// //  console.log("Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit");

// const usuario = {

//     nome:"Uzumaki naruto",
//     apelidos:["o menino da roupa de gari","o menino da raposa","o menino da profecia"],

// }

// function mostraPersonagem(pessoa){
//     console.log(`Eu sou ${pessoa.nome} e tenho apelidos: ${pessoa.apelidos}`)

    
//     const novaPessoa = {
//     ...pessoa,
//     apelidos: ["Hokage","sanin lendário","personagem principal"],
    
//     }

//     console.log(`Eu sou ${novaPessoa.nome} e tenho apelidos ${novaPessoa.apelidos}`)
// }


// mostraPersonagem(usuario)


const pessoa = {
nome:"sasuke",
idade:40,
profissao:"Hokage das sombras",
};
// brebgeegw

const pessoa1 = {
    nome:"Rock lee",
    idade:40,
    profissao:"Sentar a porrada",
};

function mostrraProfissional(pessoa){
const nomePessoa = pessoa.nome
const nomeCaracterePessoa = pessoa.nome.length
const idadePessoa = pessoa.idade
const profissaoPessoa = pessoa.profissao
const numeroCaracterePessoaProfissao = pessoa.profissao.length

return [nomePessoa,nomeCaracterePessoa,idadePessoa,profissaoPessoa,numeroCaracterePessoaProfissao]

}

console.log(mostrraProfissional(pessoa))
console.log(mostrraProfissional(pessoa1))

