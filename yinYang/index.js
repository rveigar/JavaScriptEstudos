function yinYang (array) {
  // escreva seu código aqui :)
  array1=[]
  for (i=0; i<array.length; i++){
     if ( array[i] %2 == 0 && array[i] %3 == 0) {
       array1.push("YinYang");
     } else if (array[i] %2 == 0 ){
       array1.push("Yin");
     } else if (array[i]%3 == 0){
       array1.push("Yang");
     } else array1[i] = array[i];
    console.log( array1);
  }
}
yinYang([1,2,3,6,5])