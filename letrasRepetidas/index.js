function letrasRepetidas(string) {
	// Escreva aqui seu c�digo
  aux =[];
  s="";
  l = string.length;
  for (let i=0; i < l ; i++){
    // s armazena a letra atual que est� sendo verificada (i)
     s = string[i];
    //console.log('s= '+s)
    // stringredux armazena string sem a primeira letra (i)
     stringredux = string.slice(i+1);
    //console.log('sredux '+stringredux)
    // se existe no stringredux a letra que est� contida em s
    // � sinal que � uma letra repetida
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
Implemente a fun��o ao lado que recebe uma string como par�metro e retorna um array contendo as letras repetidas na string passada

Obs:

Se n�o tiver repeti��o, retorne o array �[]�

Caso mais de uma letra esteja repetida na string, ordene o array de retorno na ordem que as letras aparecem na string originial

Ser�o passadas strings com no m�ximo 2 repeti��es de cada letra, ou seja, n�o se preocupe com palavras como �carreira�, onde o �r� aparece 3 vezes

Exemplo: se for passado �ovo�, a fun��o deve retornar �[o]�

Exemplo: se for passado �passagem�, a fun��o deve retornar �[s,a]�

Exemplo: se for passado �uva�, a fun��o deve retornar �[]�
*/
