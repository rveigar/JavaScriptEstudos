function indiceDoValor (array, valor) {
  // escreva seu código aqui :)
  for (i=0; i<array.length; i++){
    if (array[i] == valor){
      return (i)
    }
  }
}
array=[2,3,4,5,6,7,8];
valor=8;
console.log(indiceDoValor(array,valor));