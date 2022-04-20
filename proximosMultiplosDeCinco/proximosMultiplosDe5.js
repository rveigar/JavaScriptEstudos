function proximosMultiplosDe5 (valorInicial, quantidade) {
  // escreva seu código aqui :)
  a=[]
  cont=0
  if (valorInicial %5 ==0){
    for (i=0; i<quantidade; i++){
      console.log('valor', valorInicial+cont);
      //a.push(valorInicial+cont);
      a[i] = valorInicial+cont
      console.log(a)
      cont=cont+5
    }
  } else {
    resto=valorInicial%5;
      console.log('resto',resto)
      valorInicial = valorInicial+5-resto;
      console.log('novo valor inicial',valorInicial)
      for (i=0; i<quantidade; i++){
        a[i] =valorInicial+cont;
        cont=cont+5
      }
    }
      console.log(a);
}

proximosMultiplosDe5(15,4)