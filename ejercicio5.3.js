const calle = 'S..|...|..'
const tiempo = 10


function cyberReindeer(road, time) {
    let respuesta = [] 
    carretera = road.split('')
    let santa = carretera.findIndex(element => element === 'S');
    console.log(santa)
    let turno = carretera


    carretera.splice(santa,1,'.')
    carreteraStop = carretera
    console.log(carreteraStop)

    let stops = []
    //let carreteraLibre = carreteraStop.map(element=> element === '|' ? '*':'.')
    let carreteraLibre = carreteraStop.map((element,index)=> {
        if (element==='|') {
            stops.push(index)
            return '*'
            
        } return '.'
    })
    console.log(carreteraLibre)
    console.log(stops)



    
    let tiempoTurno = 0
    while (tiempoTurno<time) {
        tiempoTurno++
        

        if (tiempoTurno<6) {
            turno=[]
            turno=carreteraStop

            if (stops.includes(santa)) {
                
            } else {
                turno.splice(santa-1,1,'.')
                turno.splice(santa,1,'S')
                santa++

            }
            
        } else {
            turno=[]
            console.log( 'turno vacio' +turno)
            turno=carreteraLibre
            console.log( 'turno nuevo' +turno)
            
            if (stops.includes(santa)) {
                
                turno.splice(santa,1,'*')
                turno.splice(santa+1,1,'S')

            } else {
                turno.splice(santa,1,'.')
                turno.splice(santa+1,1,'S')
            }

            
            
            
            santa++
            
        }


        respuesta.push(turno.join(''))
    }













    return respuesta
}



console.log(cyberReindeer(calle,tiempo))
