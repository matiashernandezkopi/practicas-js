const calle = 'S..|...|..'
const tiempo = 10


function cyberReindeer(road, time) {
    const resultado = []
    carretera = road.split('')
    console.log('carretera: '+carretera)
    

    

    /*reconocer posicion "S" */
    let santa = carretera.findIndex(parte=> parte === 'S')
    console.log('santa: '+santa)


    /*carreteras: */
    carretera.splice(santa,1)
    carreteraStop = carretera

        /*reconocer posicion "|" */
        const stop = carretera
            .map((parte,index)=> parte === '|' ? index+1 : -1)
            .filter(element=> element !== -1)
        console.log('indice de stops: '+stop)

    let carreteraLibre = carreteraStop.map((carre,index)=>{
        if (stop.includes(index)){
            return '*'
        }else{
            return '.'
        }
    }) 

    console.log( 'carretera stop: ' +carreteraStop)
    console.log( 'carretera libre: ' +carreteraLibre)
    
    
    
    /*primer turno */
    let turno = road
    resultado.push(turno)

   
    /* esto va decidir que pasa en cada turno */
    let tiempoTurno = 0
    let carreteraEnUso = carreteraStop
    while (tiempoTurno<time-1) {
        tiempoTurno++
        
        /*cambio de carretera al 5 turno */
        if (tiempoTurno>5) {
            carreteraEnUso = carreteraLibre

            /** */
            if (stop.includes(tiempoTurno)) {
            }else{
                turno = ''
                turno = carreteraEnUso
                turno.splice(santa,1,'S')
                santa++
            }
        }else{
            turno = ''
            turno = carreteraEnUso
            turno.splice(santa,1,'S')
            santa++
        }
        
        
        
        
       




        resultado.push(turno.join('') + ' ' + tiempoTurno)
        console.log(resultado)
    }





    console.log('RESULTADO:')
    return resultado 
    
}



console.log(cyberReindeer(calle,tiempo))
