// objeto
const pessoa = {
  nome: "jose",
  idade: 30,
  ehMaiorDeIdade: true,
  altura: 1.68
};
console.log(pessoa)

console.log("Altura: ", pessoa.altura)

if (pessoa.idade >= 62) {
  console.log("� maior de idade")
} else {
  console.log("� menor de idade")
}
//  == (verifica igualdade)
/// === (verifica inclusive o tipo de dados, o string 18 � diferente do numero 18)
pessoa.idade = 18
if (pessoa.idade <18) {
  console.log("** pessoa menor de idade")} else if (pessoa.idade <60) {
    console.log ("** pessoa adulto")
  } else {
    console.log("** pessoa idosa")
  }


  console.log(pessoa.nome + " � o nome")
// uso da crase
console.log (`${pessoa.nome} � adulto`);

console.log(`ola mundo !`)