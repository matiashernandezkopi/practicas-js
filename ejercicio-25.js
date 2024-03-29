function travelDistance(map) {
    let respuesta = 0
    const mapaArray =map.split('\n')
    console.log(mapaArray);
    //mapa
    const mapa = mapaArray.map(e=>e.split(''))
    console.log(mapa);

    //posicion santa
    const santa = mapa.map(e=>e.findIndex(e=>e==='S'))//.filter((e,i)=>e>-1)
    let santaY = santa.findIndex((e,i)=>e>-1)
    let santaX = santa.find((e,i)=>e>-1)
    console.log(santaX,santaY);

    let condition = true
    let contador = 1
    while (condition === true) {
        

        

        const niño = mapa.map(e=>e.findIndex(e=>e===`${contador}`))//.filter((e,i)=>e>-1)

        if (niño.filter(e=>e>-1).length === 0) {
            
            condition = false
            console.log('respuesta return',respuesta);
            return respuesta
        }

        const niñoY = niño.findIndex((e,i)=>e>-1)
        const niñoX = niño.find((e,i)=>e>-1)

        console.log('niño',niño,niñoX,niñoY);

        const distancia = Math.abs(niñoX - santaX) + Math.abs(niñoY-santaY)

        console.log(distancia);

        if (distancia) {
            respuesta+=distancia
            console.log('respuesta',respuesta);
        }
        




        //mover a santa
        santaX = niñoX
        santaY = niñoY
        
        mapa[niñoY].splice(niñoX,1,'.')
        console.log(mapa);

        contador++



        
    }


    
    console.log(respuesta,'RESPUESTA');




    return respuesta
}

const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log('respuesta',result) // -> 12 km
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2