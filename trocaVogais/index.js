
function trocaVogais(string) {
  let l = string.length;
  let var1="";
  s=[];
  vogais ='aeiouAEIOUa';
  for (let i=0; i < l; i++){
    var1=string[i];
    //console.log('valor de var1 '+var1)
    //console.log('  vogais '+vogais)
    if (vogais.indexOf(var1)>-1){
      //console.log('      encontrei '+ var1);
      s.push(1);
    }else {s.push(var1);}

  }
  console.log('valor de s: ' +s)
}
trocaVogais('Sereia')


//const array1 = [1, 2, 'a', '1a'];
// console.log(array1.toString());
// expected output: "1,2,a,1a"
// array com vírgula

// const arr = ['one', 'two', 'three'];
// const withoutCommas = arr.join('');
// console.log(withoutCommas); // ??? 'onetwothree'
// array sem vírgulas

/*
Troca as Vogais
Implemente a função ao lado que recebe uma string como parâmetro e retorna a string original, mas com o número 1 no lugar das vogais

Exemplo: se for passada a palavra “uva”, a função deve retornar “1v1”

Exemplo: se for passada a palavra “carro”, a função deve retornar “c1rr1”

Dica: para realizar essa questão você vai precisar de uma ferramenta nova. Talvez seja útil construir um array vazio. Você pode fazer isso com o seguinte comando:

const arr=[] //constrói um array vazio chamado "arr"
Depois disso, você, talvez, queira encher esse novo array com elementos. Você pode fazer isso escrevendo ".push" logo após o nome do array. Então, para inserir "3" no array que acabamos de criar fazemos:

arr.push(3) //Insere 3 dentro do array "arr"

*/
