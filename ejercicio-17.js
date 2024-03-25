function optimizeIntervals(intervals) {
    const inicios = intervals.map(e=>e[0])
    const finales = intervals.map(e=>e[1])
    const tiempo = []
    



    let minimo = Math.min(...inicios)
    let maximo = Math.max(...finales)
    let condition = minimo
    while (condition<maximo) {
        tiempo.push(condition)
        condition++
    }
    tiempo.push(condition)
    const tiempoAlquilado = tiempo.map(e=>e*(-1))
    



    intervals.forEach((element,i) => {
        if (tiempoAlquilado.includes(element[0])&&tiempoAlquilado.includes(element[1])) {
            return
        }

        minimo = element[0]
        maximo = element[1]

        console.log('minimo ' + minimo);
        console.log('macimo ' + maximo);
        let cambiar = 0
        while (minimo<maximo) {
            cambiar = tiempoAlquilado.findIndex(value => Math.abs(value) === minimo)
            console.log(cambiar);
            tiempoAlquilado.splice(cambiar, 1, minimo);
            minimo++


            //Math.abs(numero)

        }
        cambiar = tiempoAlquilado.findIndex(value => Math.abs(value) === minimo)
        console.log(cambiar);
        tiempoAlquilado.splice(cambiar, 1, minimo);
        console.log(tiempoAlquilado);

        



    });


    const result = []
    let negativo = true
    minimo = null
    tiempoAlquilado.forEach((value,ind)=>{
        
        console.log('value: ' +value);
        if (value<0) {
            console.log('negativo: '+value);
            negativo = true
            
            if (minimo !== null) {
                maximo = tiempoAlquilado[ind-1]
                result.push([minimo,maximo])
                console.log('result: ' +result);
            }
            return
        }

        if (negativo === true) {
            console.log('negativo === true: '+value);

            negativo = false
            minimo = value
        }

        if (ind === tiempoAlquilado.length-1) {
            
            result.push([minimo,value])
        }


        


    })







    return result
}




console.log('BNAONSDNOADSNDNSANOADAN'+optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4]
]))

// [[2, 8]]


optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6]
]) // [[1, 6], [8, 10]]
  

console.log(optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6]
]) );