function somaAteMeta(inicio, meta) {
  // Escreva aqui seu código
  let arr1=[]
  let n=0
  for (let i=inicio+1; ;i++){
		n=n+i;
		console.log(n)
		arr1.push(i)
		if (n == meta) {
			return arr1;
		} else if (n > meta){
			return arr1;
		}
  }
}
somaAteMeta(2,49)