function decode(message) {
    let condition = 3
    let mensaje = message.split('')
    console.log('EMPIEZA')
    while (condition>0) {
        condition--
    
        //encontrar el ultimo parentecis que abre
        const mensajeInvertido = mensaje.slice().reverse();

        const ultimoAbierto = mensajeInvertido.findIndex(e=> e==='(')
        console.log(ultimoAbierto)

        

        const indiceMensajeOriginal = mensaje.length - 1 - ultimoAbierto;
        console.log(indiceMensajeOriginal)


        const primeroCerrado = mensaje.findIndex((e,i)=> e===')'&&i>indiceMensajeOriginal)
        console.log(primeroCerrado)


        //encontrar el texto a corregir
        let correccion = mensaje.filter((e,i)=> i>indiceMensajeOriginal&&i<primeroCerrado)
        console.log('correccion= ' + correccion + ' entre: ' +indiceMensajeOriginal+' y '+primeroCerrado)



        //darlo vuelta
        correccion.reverse()

        //borrar el anterior
        const mensajeCorejido = mensaje.slice()
        mensajeCorejido.splice(indiceMensajeOriginal,correccion.length+2)

        console.log('mensajeCorregido= ' +mensajeCorejido)

        correccion.reverse().forEach(element => {
            mensajeCorejido.splice(indiceMensajeOriginal,0,element)
        });
        console.log('mensajeCorregido arreglado= ' +mensajeCorejido)

        mensaje = mensajeCorejido
        console.log('mensaje final= '+mensaje)
    
    }


    


    return mensaje.join('')
}




const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus


console.log(decode('(olleh) (dlrow)!'))