function letrasRepetidas(string) {
	// Escreva aqui seu código
  aux =[];
  s="";
  l = string.length;
  for (let i=0; i < l ; i++){
    // s armazena a letra atual que está sendo verificada (i)
     s = string[i];
    //console.log('s= '+s)
    // stringredux armazena string sem a primeira letra (i)
     stringredux = string.slice(i+1);
    //console.log('sredux '+stringredux)
    // se existe no stringredux a letra que está contida em s
    // é sinal que é uma letra repetida
    if (stringredux.indexOf(s) >-1 ){
      aux.push(s);
       console.log(aux);
    }


  }
  console.log(aux);
}
letrasRepetidas('abobora')

/*



Letras Repetidas
Implemente a função ao lado que recebe uma string como parâmetro e retorna um array contendo as letras repetidas na string passada

Obs:

Se não tiver repetição, retorne o array “[]”

Caso mais de uma letra esteja repetida na string, ordene o array de retorno na ordem que as letras aparecem na string originial

Serão passadas strings com no máximo 2 repetições de cada letra, ou seja, não se preocupe com palavras como “carreira”, onde o “r” aparece 3 vezes

Exemplo: se for passado “ovo”, a função deve retornar “[o]”

Exemplo: se for passado “passagem”, a função deve retornar “[s,a]”

Exemplo: se for passado “uva”, a função deve retornar “[]”
*/
