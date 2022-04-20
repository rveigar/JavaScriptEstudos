function palindrome(texto){
  let l = texto.length;
  let pal = true;
  j = l-1;
  m = parseInt(l/2);
  for (let i=0; i<m;i++){
    if (texto[i] == texto[j]) {
        //console.log(texto[i]);
        //console.log(texto[j])
      j--;
     } else {
          console.log('não é palindrome');
          pal = false;
      break;
       }

 }
 if (pal == true) {
   console.log(true);
    } else {
   console.log(false)
    }
}

palindrome('abcba')