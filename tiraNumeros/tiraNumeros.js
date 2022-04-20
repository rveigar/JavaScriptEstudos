function tiraNumeros(string) {
  // Escreva aqui seu código
  let a=""
  for ( let i=0; i<string.length; i++) {
	  if ( string[i].match(/[a-zA-Z]/)){
	  a=a+string[i]
    //console.log(a)
  } 
  //
  //console.log(a)
}
return(a)
}


tiraNumeros("a12b33c11")