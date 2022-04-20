function encriptarPalavra (palavra, chave) {
  // escreva seu código aqui :)
  let ar=""
  let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   console.log("palavra= "+palavra)
 for (i=0; i<palavra.length; i++){
  console.log("==> palavra[i]= "+ palavra[i]);
   //console.log("   valor de i= "+i)
  
  for (j=0; j<alfabeto.length;j++) {
     z=0;
    //console.log("   valor de j= "+j)
    //console.log("   valor de z= "+z)
    if (palavra[i] == alfabeto[j]){
      z=j+chave;
      	  console.log("      valor de z= "+z)

      if (z > 25){
       z = z%25 -1; 
      }
	  console.log("      valor de z= "+z)
      ar +=alfabeto[z];
      //console.log("valor de ar= "+ar)
	  break;
    }
  }
  console.log(ar)
 }
  //console.log(ar)
}
encriptarPalavra('xyz', 2)

