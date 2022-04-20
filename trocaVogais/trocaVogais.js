function trocaVogais(string) {
  // Escreva aqui seu código
  let  str1 = [];
  let a=""
  for (let i =0; i <string.length; i++) {
	  if (string[i] =='a' || string[i] == 'e' || string[i] =='i' || string[i] =='o' || string[i] =='u' ) {
// str1.push('1') 
a=a+'1'
	  } else {
	//	  str1.push(string[i])
	a=a+string[i]
	  }
  }
  //let a=str1
  console.log(a)
  return(a)
}

trocaVogais("bacedofigu")