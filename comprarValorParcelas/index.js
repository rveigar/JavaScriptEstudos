function comprar (valor, parcelas) {
if ( (valor >1000 && parcelas >=10)
|| (valor >500 && parcelas >=5) || valor <=500){
  console.log ("Vou comprar")
} else console.log ("Não vou comprar")

}
comprar (2000, 3)
