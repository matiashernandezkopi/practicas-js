function calculateTime(deliveries) {

    const respuesta = ['00','00','00']
    deliveries.forEach(element => {
        const tiempo = element.split(':')
        console.log(tiempo)
        let extra = 0

        //0 horas, 1 minutos, 2 segundos
        const respuestaNumero = respuesta.map(element => parseInt(element))
        respuestaNumero[0] = (-7)
        
        //segundos
        console.log('respuesta[2]: '+respuestaNumero[2])
        console.log('tiempo[2]: '+tiempo[2])
        console.log('respuesta[2]+tiempo[2]: '+(respuestaNumero[2]+parseInt(tiempo[2])))
        respuestaNumero[2] = (respuestaNumero[2] + parseInt(tiempo[2])).toString();
        console.log('respuesta: '+respuesta)
        

        if (respuestaNumero[2] >= 60) {
            const minutosExtras = Math.floor(respuestaNumero[2] / 60); // Calcula los minutos adicionales
            const restoSegundos = respuestaNumero[2] % 60; // Obtiene el resto de segundos después de dividir por 60
        
            respuestaNumero[2] = restoSegundos.toString(); // Actualiza los segundos en la respuesta
        
            respuestaNumero[1] = (respuestaNumero[1] + minutosExtras).toString().padStart(2, '0'); // Actualiza los minutos en la respuesta, asegurándose de que estén en formato de dos dígitos
        }

        //minutos
        respuestaNumero[1] = (respuestaNumero[1] + parseInt(tiempo[1]) + extra).toString();


        
        if (parseInt(respuestaNumero[1]) >= 60) {
            const minutosExtras = Math.floor(parseInt(respuestaNumero[1]) / 60); // Calcula los minutos adicionales
            const restoSegundos = parseInt(respuestaNumero[1]) % 60; // Obtiene el resto de segundos después de dividir por 60
        
            respuestaNumero[1] = restoSegundos.toString(); // Actualiza los segundos en la respuesta
        
            respuestaNumero[0] = (parseInt(respuestaNumero[0]) + minutosExtras).toString().padStart(2, '0'); // Actualiza los minutos en la respuesta, asegurándose de que estén en formato de dos dígitos
        }
        //horas
        respuestaNumero[0] = (parseInt(respuestaNumero[0]) + parseInt(tiempo[0]) + extra).toString().padStart(2, '0');;

        console.log(respuestaNumero)

        //maximo = 07:00:00

    });








    
  
  
  
  
  
  
  
  
  
    return respuesta
}


console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'


console.log('RESPUESTA' +calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
  ]))
 // '-05:29:00'