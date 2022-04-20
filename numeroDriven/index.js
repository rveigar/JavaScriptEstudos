function numeroDriven(numero) {
	for (i=1;i<1000; i++){
		x = 5**i-2;
		if (numero == x) {
			return( "Numero Driven");
			break;
		}
	} return "Não é desse tipo"

}
console.log(numeroDriven(3));
