function letrasRepetidas(string) {
	// Escreva aqui seu código
	let resp = []
	for (let i=0; i<string.length; i++){
    
		if (string.includes(string[i],i+1) ) {
			resp.push(string[i]);
      //console.log('string[i]',string[i])
		} //else console.log('nao')
	}
	console.log( resp)
}
letrasRepetidas('EddozeeE')