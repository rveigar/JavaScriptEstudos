function ehPalindromo (string) {
  // escreva seu código aqui :)
  tamanho = string.length;
  for (i=0; i<tamanho/2; i++){
    console.log(tamanho/2)
    if (string[i] !== string[tamanho-1-i]) {
      return "não"
    }
    return ("sim")
  }
}

ehPalindromo('abcde')