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
Soma até a Meta
Implemente a função ao lado que recebe 2 números como parâmetros e retorna um array contendo os números consecutivos ao 1o parâmetro até o valor em que, ao somar todos os números no array, temos o valor passado no 2o parâmetro

Exemplo: se for passado os valores “2” e “12”, a função deve retornar o array [3,4,5], pois 3+4+5=12 que é a meta passada no 2o parâmetro

Exemplo: se for passado os valores “12” e “58”, a função deve retornar o array [13,14,15,16], pois 13+14+15+16=58 que é a meta informada no 2o parâmetro

*/
