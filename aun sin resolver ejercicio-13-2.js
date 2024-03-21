function calculateTime(deliveries) {

    const respuesta = ['00','00','00']
    const respuestaNumero = respuesta.map(element => parseInt(element))
    respuestaNumero[0] = (-7)
        
    deliveries.forEach(element => {
        const tiempo = element.split(':')
        const tiempoNumero = tiempo.map(element => parseInt(element))
        let extra = 0
        let resto = 0

        //0 horas, 1 minutos, 2 segundos
        
        //segundos
        console.log('respuestaNumero[0] + tiempoNumero[0]: ' + respuestaNumero[2] +' + '+ tiempoNumero[2])
        respuestaNumero[2] += tiempoNumero[2]; 


        if (respuestaNumero[2] >= 60) {
            extra = Math.floor(respuestaNumero[2] / 60); // Calcula los minutos adicionales
            resto = respuestaNumero[2] % 60; // Obtiene el resto de segundos después de dividir por 60
        
            respuestaNumero[2] = resto // Actualiza los segundos en la respuesta
        
            tiempo[1] = (tiempo[1] + extra) // Actualiza los minutos en la respuesta, asegurándose de que estén en formato de dos dígitos
        } 


        



        //minutos 

        console.log('respuestaNumero[0] + tiempoNumero[0]: ' + respuestaNumero[2] +' + '+ tiempoNumero[2])
        respuestaNumero[1] += tiempoNumero[1]; 


        if (respuestaNumero[1] >= 60) {
            extra = Math.floor(respuestaNumero[1] / 60); // Calcula los minutos adicionales
            resto = respuestaNumero[1] % 60; // Obtiene el resto de segundos después de dividir por 60
        
            respuestaNumero[1] = resto // Actualiza los segundos en la respuesta
        
            respuestaNumero[0] = (respuestaNumero[0] + extra) // Actualiza los minutos en la respuesta, asegurándose de que estén en formato de dos dígitos
        }




        //horas
        console.log('respuestaNumero[0] + tiempoNumero[0]: ' + respuestaNumero[0] +' + '+ tiempoNumero[0])
        respuestaNumero[0] += tiempoNumero[0] + extra; 
        
        console.log(respuestaNumero)

















        console.log(respuestaNumero)

        //maximo = 07:00:00

    });








    
  
  
  
  
  
  
  
  
  
    return respuesta
}


console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

//console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'


/*console.log('RESPUESTA' +calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
  ]))*/
 // '-05:29:00'