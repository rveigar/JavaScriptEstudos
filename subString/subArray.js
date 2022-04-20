function subArray(array, subarray) {
	// Escreva aqui seu código
  let resp = subarray;
  console.log("resp= ", resp)
  let x=0;
  for ( i=0; i<subarray.length; i++){
    console.log('i: ', i, 'subarray[i]', subarray[i]);
    for (let j=0; j < array.length; j++){
      console.log(' j= ', j, '  array[i] ', array[j]);
      if ( subarray[i] == array[x]) {
        console.log(' x= ', x, '  array[x] ', array[x]);
        console.log(' **** encontrei');
        resp=resp.substr(1)
        console.log("valor de resp= ", resp)
        x++;
        
        break;
      } else {
          x++;
        }
    }
  }
    if (resp=="") {
    console.log( "Encontrado")
    }else console.log( "Falhou")
}
  subArray('12345','45')