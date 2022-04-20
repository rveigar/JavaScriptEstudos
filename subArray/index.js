function subArray(array, subarray) {
let j=0;
  retorno = true;
  for (let i=0 ; i< subarray.length; i++){
    for ( ; j < array.length;j++ ){
      //console.log('sub ' + subarray[i]+ ' i= '+i+  ' array '+ array[j]+ ' j= '+j)
      if (subarray[i] == array[j]) {
        retorno = true;
        //console.log('sub encontrado '+subarray[i]);
        break;
      } else {retorno = false;}

    }

  }
  console.log (retorno);
}


subArray([1,2,3,4], [4,3])





/*

SubArray
Implemente a função ao lado que recebe dois arrays como parâmetro e deve retornar true caso o 2o array seja uma subsequência do 1o array e false caso contrário

Obs: uma subsequência é um conjunto de números que está contido dentro de uma sequência maior de números e na mesma ordem. Por isso, “1,3,5” é uma subsequência de “1,2,3,4,5”, pois todos os números do 1o conjunto aparecem no 2o conjunto e na mesma ordem (o 1 vem antes do 3 e o 3 vem antes do 5 na sequencia original).

Exemplo: se forem passados os arrays “[1,4,3,5]” e “[1,2,4]”, a função deve retornar false, pois o número “2” não está presente no 1o array

Exemplo: se forem passados os arrays “[1,4,3,5]” e “[1,3,4]”, a função deve retornar false, pois, embora todos os valores do 2o array estejam presente no 1o, a ordem não foi respeitada (o “4” deveria vir antes do “3”).
*/

