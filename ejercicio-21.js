/*por cada caracter revisar todos los que le siguen

sumar cuantos '1' y '0' hay

si alguno supera la mitad del largo del array entonces freno

si llega un punto en el que la cantidad de 1 y 0 es igual
    lo comparo con el punto anterior, para saver cual es mayor
        para hacer eso, agarro el indice del final y le resto el del principio
    guardo los index del incio y final

al terminar el recorrido returno el guardado





*/

function findBalancedSegment(message) {
    const masGrande = []
    const mitad = Math.round(message.length /2)
    console.log(mitad);
    //por cada elemnto
    message.forEach((element,index) => {
        let cantidadIguales= 1
        let cantidadDistintos = 0
        const presente = element
        //comparo con el resto
        message.forEach((caracter,indice) => {
            //solo pasan los que siguen
            if (indice<=index) return
            console.log('index y indice: ' +index,indice);

            if (caracter === presente) {
                cantidadIguales++
            } else {
                cantidadDistintos++
            }

            if (cantidadDistintos === cantidadIguales) {
                let nuevoGrande = indice-index
                let grande = masGrande[1]-masGrande[0] || 0
                console.log('nuevoGrande = '+nuevoGrande+'      '+'grande = '+grande);
                
                if (nuevoGrande >grande) {
                    masGrande.splice(0,2,index,indice)
                }
            }

            

        });

    });






    return masGrande
}



console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));