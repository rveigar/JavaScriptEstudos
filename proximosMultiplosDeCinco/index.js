function proximosMultiplosDe5(valorInicial, quantidade){
ar=[];
  q=0;
  for (i=valorInicial;q<quantidade;i++){
    if (i%5 == 0 && q <quantidade){
      //console.log(i);
      q = q+1;
      //console.log(q);
      ar.push(i);
    }
  }
  console.log(ar);
}
proximosMultiplosDe5(8,5)