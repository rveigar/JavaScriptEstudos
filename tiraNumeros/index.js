function tiraNumeros(string) {
n = "0123456789"
a = [];
l = string.length;
  for (let i=0; i <l; i++){
    var1 = string[i];
    if (n.search(var1)>-1){
      //console.log(var1)
    }else {
      a.push(var1);
    }
  }
x= a.join('')
 console.log(x) ;
}

tiraNumeros('31')

/*
Remover os N�meros
Implemente a fun��o ao lado que recebe como par�metro uma string, misturando letras e n�meros, e deve retornar uma string contendo apenas as letras da string passada na mesma ordem

Exemplo: se for passada a string �ab2c4d�, a fun��o deve retornar �abcd�

Exemplo: se for passada a string �1234�, a fun��o deve retornar ��
*/
