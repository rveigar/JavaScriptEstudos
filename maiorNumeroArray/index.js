lista = [40,5,9,8,2,99];
let max =0;
let ind = 0;
for (let i=0; i < lista.length; i++){
  if (lista[i]>max){
    max = lista[i];
    ind = i;
  }
}
console.log(ind)
console.log(max)

// retornar o índice do maior número do array