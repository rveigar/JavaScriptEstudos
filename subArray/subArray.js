function subArray(array, subarray) {
	// Escreva aqui seu código
  console.log('valor de array: ', array);
  console.log('valor de subarray: ', subarray);
let x = 0;
sub1 = subarray;
for (let i=0; i <subarray.length; i++){

  for (let j=0; j < array.length; j++) {
    if (subarray[i] == array[x]) {
      sub1.splice(0,1);
      console.log('Valor de sub1= ', sub1);
      x++
    } else x++

  }


}
if (sub1 =="") {
  return true;
} else return false;


}
  subArray([1,2,3,4,5],[1,9])
