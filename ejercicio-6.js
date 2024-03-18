const text = '><**>'


function maxDistance(movements) {
    let turnos = movements.split('')
    console.log(turnos)

    

    const izquierda = turnos.filter(turno => turno === '<')
    console.log('izquierda: ' + izquierda.length)

    const derecha = turnos.filter(turno => turno === '>')
    console.log('derecha: ' + derecha.length)

    const neutro = turnos.filter(turno => turno !== '<' && turno !== '>')// o turno => turno === '*'
    console.log('neutro: ' + neutro.length)



    const respuesta = Math.abs(izquierda.length - derecha.length) + neutro.length




    return respuesta
}




console.log('respuesta final: '+maxDistance(text)) 