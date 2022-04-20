function avancarDias(dia, quantidade) {

    let aux = 0;
    if (dia == 'Segunda-feira'){
        aux=1
    } else if (dia == 'Terca-feira') {
        aux=2;
    }
      else if (dia == 'Quarta-feira') {
          aux = 3;
       }
       else if (dia == 'Quinta-feira') {
               aux = 4;
       }
        else if (dia == 'Sexta-feira') {
                aux = 5;
        }
         else if (dia == 'Sabado') {
                aux = 6;
         }
         else  aux = 7;
  aux = aux + quantidade;
  //console.log(aux);
   if (aux < 7){
     if (aux == 1){console.log( 'Segunda-feira')}
     if (aux == 2){console.log( 'Terca-feira')}
     if (aux == 3){console.log( 'Quarta-feira')}
     if (aux == 4){console.log( 'Quinta-feira')}
     if (aux == 5){console.log( 'Sexta-feira')}
     if (aux == 6){console.log( 'Sabado')}
     if (aux == 7){console.log( 'Domingo')}
     console.log('aux<7 '+aux)
   }else {
     aux= aux%7;
     if (aux == 1){console.log( 'Segunda-feira')}
     if (aux == 2){console.log( 'Terca-feira')}
     if (aux == 3){console.log( 'Quarta-feira')}
     if (aux == 4){console.log( 'Quinta-feira')}
     if (aux == 5){console.log( 'Sexta-feira')}
     if (aux == 6){console.log( 'Sabado')}
     if (aux == 7){console.log( 'Domingo')}

     console.log('aux >=7 '+ aux)
   }
 }
 //aux = aux + quantidade;

avancarDias('Segunda-feira', 3)