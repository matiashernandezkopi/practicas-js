const calle = 'S..|...|..'
const tiempo = 10


function cyberReindeer(road, time) {
    const resultado = []
    carretera = road.split('')
    console.log('carretera: '+carretera)
    let tiempoTurno = 0

    /*reconocer posicion "|" */
    const stop = carretera
        .map((parte,index)=> parte === '|' ? index : -1)
        .filter(element=> element !== -1)
    console.log('indice de stops: '+stop)


    /* esto va decidir que pasa en cada turno */
    let turno = road
    let santa = 0
    let piso = '.'
    resultado.push(turno)

   

    while (tiempoTurno<time-1) {
        tiempoTurno++
        
        /*reconocer posicion "S" */
        santa = carretera.findIndex(parte=> parte === 'S')
        console.log('santa: '+santa)

        if (stop.includes(tiempoTurno)&&tiempoTurno<4) {
            
        
        }else{
            /*avanzar a santa */
                /*1sacar a santa */
                carretera.splice(santa,1,piso) 
                turno = carretera
                console.log('turno sin santa: '+ turno)

                /*2avanza santa */
                carretera.splice(santa+1,1,'S')
                turno = carretera
                console.log('avanza santa: '+ turno)
        }
       
        /*reconocer el piso de santa para el proximo turno */
        if (stop.includes(tiempoTurno)-1&&tiempoTurno<4) {
            piso = '.'
        } else if (stop.includes(tiempoTurno)){
            piso = '*'
        }else{
            piso = '.'
        }
        console.log('siguiente piso: '+ piso)




        resultado.push(turno.join('') + ' ' + tiempoTurno)
        console.log(resultado)
    }





    console.log('RESULTADO:')
    return resultado 
    
}



console.log(cyberReindeer(calle,tiempo))
