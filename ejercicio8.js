let hell = '66a11b'

function organizeGifts(gifts) {
    let regalos = gifts.split('')




    //dividir por grupo (ej: 66a,11b)
    let lista = []
    let numero = 0
    regalos.forEach(regalo => {
        //si NO es un numero
        if (isNaN(regalo)) {
            console.log('no es un numero: ' + regalo)
            lista.push(numero+'/'+regalo)
            console.log('listaA: ' +lista)
            numero = 0
        } else {
            //es un numero
            if (numero>0) {
                console.log( 'numero <0: '+ numero)
                console.log( 'numero: '+ numero + ' regalo: ' +regalo)
                numero+=regalo
                console.log( 'nuevo numero: '+ numero)
            }else{
                numero=regalo
                console.log( 'nuevo numero: '+ numero)
            }
        }
    });



    //dividir paketes (ej: [a] {a}{a}{a}{a}{a}{a} (a) )
    let cajas = []
    let palets = []
    let bolsas = []

    let paketes = []

    let cantidad = 0
    let tipo = ''
    let regalo = []
    lista.forEach(listado => {

        //dividimos entre cantidad y tipo de regalo
        regalo = listado.split('/')
        console.log(regalo)

        cantidad = regalo[0]
        tipo = regalo[1]
        console.log('cantidad: ' + cantidad + ' tipo: ' + tipo)

        //hacemos los grupos
        while(cantidad>0){
            if (cantidad>=10) {
                console.log(cantidad +' - 10 ')
                cantidad -= 10
                console.log('igual: ' +cantidad)

                palets.push('{' + tipo + '}')
                console.log('palets: ' + palets)
            } else {
                if (cantidad>=5) {
                    console.log(cantidad +' - 5')
                    cantidad -= 5
                    console.log('igual: ' +cantidad)

                    cajas.push('[' + tipo + ']')
                    console.log('cajas: ' + cajas)
                } else {
                    console.log(cantidad +' - 1')
                    cantidad -= 1
                    console.log('igual: ' +cantidad)

                    bolsas.push('(' + tipo + ')')
                    console.log('bolsas: ' + bolsas)
                }
            }



        }

        
        console.log('cantidad final: ' +cantidad)

    });

    let respuesta = cajas.join('')
    console.log(respuesta)
    paketes.push(respuesta)
    console.log(paketes)


    respuesta = palets.join('')
    console.log(respuesta)
    paketes.push(respuesta)
    console.log(paketes)
    

    respuesta = bolsas.join('')
    console.log(respuesta)
    paketes.push(respuesta)
    console.log(paketes)



    //paketes.push(cajas+palets+bolsas)





    respuesta = paketes.join('')
    

    return respuesta
}

console.log(organizeGifts(hell))