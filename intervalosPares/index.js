function intervaloPares(inicio, fim, quantidade) {
let c =0;
let lista = [];
  for (let i=inicio+1; i <fim; i++){
    if (i%2 == 0 && c < quantidade){
      lista[c] = i;
      c++
    }
  }
  console.log(lista)
}
intervaloPares(2,10,3)

// informar o inicio e fim e a quantidade de numeros pares existentes neste intervalo