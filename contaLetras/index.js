
function ContaLetras(texto, letra){
let l =texto.length;
let c = 0;
 for (let i=0; i < l ; i++){
  console.log(texto[i])
   if (letra == texto[i]){
    c =c + 1;
  }
 }
  console.log ('Letra '+letra+ ' ocorre '+c +' vez(es) em ' + texto)
}
ContaLetras('Soraia','a')
/*

Conta Letras
Implemente a fun��o ao lado que recebe como par�metros uma string e uma letra e deve retornar a quantidade de ocorr�ncias da letra passada na string passada.

Exemplo: se for passado �carreira� e a letra �r�, a fun��o deve retornar 3

Exemplo: se for passado �ovo� e a letra �s�, a fun��o deve retornar 0

Dica: Strings se comportam parecido com arrays. Ent�o, podemos obter o n�mero de caracteres de uma string utilizando a propriedade length como se segue:

let palavra = "abcdef";
let tamanho=palavra.length;//Nesse caso a vari�vel tamanho vai receber 6 que � o n�mero de caracteres em palavra
Outra semelhan�a � que podemos acessar um caractere da string por sua posi��o. Ent�o, se quisermos acessar a primeria letra da string palavra fazemos:

let primeiraLetra=palavra[0]//Com isso, temos que primeiraLetra vai receber a string "a"
*/
