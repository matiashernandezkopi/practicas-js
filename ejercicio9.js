
let ejemplo = ['🟢', '🔴', '🟢', '🔴', '🔴']
//es para impares nada mas


function adjustLights(lights) {
    let contador = lights.length
    let arrayVerde = []
    let arrayRoja = []
    while (contador>0) {
        
        if (contador%2 === 0) {
            //console.log(contador + ' es par')
            arrayRoja.push('🟢')
            arrayVerde.push('🔴')
            //console.log('arrayVerde = '+arrayVerde)
            //console.log('arrayRoja = '+arrayRoja)
        } else {
            //console.log(contador + ' es impar')
            arrayRoja.push('🔴')
            arrayVerde.push('🟢')
            //console.log('arrayVerde = '+arrayVerde)
            //console.log('arrayRoja = '+arrayRoja)
        }


        contador--
    }



    
    let contadorVerde = 0
    let contadorRojo = 0
    lights.forEach(element => {
        //comparar con cada una
        if (element !== arrayRoja[contador]) {
            contadorRojo++
            
        }else{
            contadorVerde++
        }



        contador++
    });
    
    let respuesta = 0
    if (contadorRojo<contadorVerde) {
        respuesta = contadorRojo
    } else {
        respuesta = contadorVerde
    }


    return respuesta
}



adjustLights(ejemplo)

console.log('respuesta final: ' +adjustLights(ejemplo))




console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log( adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))
// -> 1 (cambia la primera luz a verde)

console.log( adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)