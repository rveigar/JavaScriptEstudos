function somaAteMeta(inicio, meta) {
 a=[];
  c = 0;
  for (let i=inicio+1; i<meta; i++){
    a.push(i);
    console.log('valor de i= ' + i)
    console.log('valor de a= '+ a);

    c = c+i;
    console.log('valor de c= '+c);
    if (c == meta || c> meta){
    console.log(a)  ;
      break;
    }
  }

}
somaAteMeta(18,83)

/*
Soma at� a Meta
Implemente a fun��o ao lado que recebe 2 n�meros como par�metros e retorna um array contendo os n�meros consecutivos ao 1o par�metro at� o valor em que, ao somar todos os n�meros no array, temos o valor passado no 2o par�metro

Exemplo: se for passado os valores �2� e �12�, a fun��o deve retornar o array [3,4,5], pois 3+4+5=12 que � a meta passada no 2o par�metro

Exemplo: se for passado os valores �12� e �58�, a fun��o deve retornar o array [13,14,15,16], pois 13+14+15+16=58 que � a meta informada no 2o par�metro

*/
