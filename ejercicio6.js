const text = '>***>'


function maxDistance(movements) {

    // divido los movimientos en un array
    let turnos = movements.split('')
    console.log(turnos)

    //varibales necesarias
    let contador = 0
    let respuesta = 0


    //reviso cada turno
    turnos.forEach(turno => {
        //este puede ser izquierda o derecha, asi que lo decido al final
        if (turno==='*') {
            contador++
            console.log('* contador:' + contador)
        } else {
            //suponiendo que siempre alla '<','>' o '*'
            //solo falta comprobar si '>' o '<'
            if (turno=== '>') {

                respuesta++
                console.log('> ' + respuesta)
            } else {
                respuesta--
                console.log('< ' + respuesta)
            }
        }
    });

    //momento decicivo 
    //hay mas posibilidades a la izquier o derecha?
    console.log('+ o - ' + respuesta)
    if (respuesta<0) {
        //si es negativo (izquierda) lo pasa a positivo
        //tengamos en cuenta que el programa no necesita
        //decir la direccion, solo necesita la distancia
        respuesta = respuesta *(-1)
        console.log('- ' + respuesta)
    }
    console.log( respuesta +'+' + contador)


    //sumamos los '*'
    respuesta+=contador
    console.log('final' + respuesta)


    
    return respuesta
}





console.log(maxDistance('><<<<**>>'))