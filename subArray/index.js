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
Implemente a fun��o ao lado que recebe dois arrays como par�metro e deve retornar true caso o 2o array seja uma subsequ�ncia do 1o array e false caso contr�rio

Obs: uma subsequ�ncia � um conjunto de n�meros que est� contido dentro de uma sequ�ncia maior de n�meros e na mesma ordem. Por isso, �1,3,5� � uma subsequ�ncia de �1,2,3,4,5�, pois todos os n�meros do 1o conjunto aparecem no 2o conjunto e na mesma ordem (o 1 vem antes do 3 e o 3 vem antes do 5 na sequencia original).

Exemplo: se forem passados os arrays �[1,4,3,5]� e �[1,2,4]�, a fun��o deve retornar false, pois o n�mero �2� n�o est� presente no 1o array

Exemplo: se forem passados os arrays �[1,4,3,5]� e �[1,3,4]�, a fun��o deve retornar false, pois, embora todos os valores do 2o array estejam presente no 1o, a ordem n�o foi respeitada (o �4� deveria vir antes do �3�).
*/

