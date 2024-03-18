var palabra = '(olleh) (dlrow)!';


function decode(texto) {
    var letras = texto.split('');
    console.log(letras[1]);

    var inicio = -1;
    var fin = 0;
    var correccion = '';
    var correccionArray = [];

    while (fin !== -1) {
        fin = -1;
        inicio = -1;

        for (let i = 0; i < letras.length; i++) {
            const element = letras[i];
            if (element === '(') {
                inicio = i;
                console.log('Primer paréntesis: ' + element + ' en el lugar: ' + inicio);
            } else if (element === ')') {
                fin = i;
                console.log('Final paréntesis: ' + element + ' en el lugar: ' + fin);
                break;
            } else {
                if (inicio === -1 && fin !== -1) {
                    console.log('Fin');
                    fin = -1;
                    break;
                }
            }
        }

        correccion = '';
        correccionArray = [];

        if (fin !== -1) {
            for (let i = fin - 1; i > inicio; i--) {
                if (letras[i] === ',') {
                    console.log('Eliminar: ' + letras[i]);
                    letras.splice(i, 1, ' ');
                    console.log('Resultado: ' + letras);
                } else {
                    correccion += letras[i];
                    console.log('Corrección: ' + correccion);
                }
            }

            correccionArray = correccion.split('');
            letras.splice(inicio, correccionArray.length + 2);

            for (let i = correccionArray.length - 1; i > -1; i--) {
                letras.splice(inicio, 0, correccionArray[i]);
                console.log(letras);
            }
        }
    }

    palabra = letras.join('');
    console.log(palabra);

    return palabra;
}



/*decode(palabra);*/
















/*console.log('LISTOOO: ' + decode(palabra));
console.log('LISTOOO 2: ' + decode('(olleh) (dlrow)!'));
console.log('LISTOOO 3: ' + decode('sa(u(cla)atn)s'));*/


function decodeNode(texto) {
    const letras = texto.split('');
    let letrasNuevas = texto.split('');
    //console.log(letrasNuevas)
    //console.log(letras[1]);

    const inicio = [];
    const fin = [];
    

    

    /*for (let i = 0; i < letras.length; i++) {
        const element = letras[i];
        if (element === '(') {
            inicio = i;
            console.log('Primer paréntesis: ' + element + ' en el lugar: ' + inicio);
        } else if (element === ')') {
            fin = i;
            console.log('Final paréntesis: ' + element + ' en el lugar: ' + fin);
            break;
        } else {
            if (inicio === -1 && fin !== -1) {
                console.log('Fin');
                fin = -1;
                break;
            }
        }
    }*/

    /*var palabra = '(olleh) (dlrow)!'; */


    /*1 reconocer parentecis */
    letrasNuevas.map((letra,index)=>{
        if (letra === '(') {
            inicio.push(index);
            /*console.log('Primer paréntesis: ' + letra + ' en el lugar: ' + inicio);*/
        } else if (letra === ')') {
            fin.push(index);
            /*console.log('Final paréntesis: ' + letra + ' en el lugar: ' + fin);*/
            
        } 
    });

    /*2 reconocer texto a corregir */



    
    let cantidad = 0
    let correccionArray = []
    let correccion = ""
    let inicioUsado = 0
    let finUsado = 0
    let index = 0

    /*por cada parentecis (empezando por el utlimo que abre) */
    inicio.reverse().map((primero,contador)=>{
        
        
        index = (inicio.length-1) - contador

        /*busco el primero que cierra */
        if (primero<fin[index-1]) {
            finUsado = index-1
            inicioUsado = contador
            cantidad = fin[finUsado]-primero
            /*esta parte del codigo borra dos parenticis, dentro de otro parentesis */
            //console.log('FIN[INDEX]: '+ fin[index])
            fin[index]=fin[index]-2
            //console.log('FIN[INDEX]: '+ fin[index])
            //console.log('primero<fin[index-1] inicio= '+ inicioUsado+' fin= '+fin[index-1]+' cantidad de letra entremedio= '+cantidad)
        } else if(primero<fin[index]){
            cantidad = fin[index]-primero
            finUsado = index
            inicioUsado = contador
            //console.log('primero<fin[index] index= '+ index+ ' primero: '+ primero +' fin= '+fin[finUsado]+' cantidad de letra entremedio= '+cantidad)
        }
        


        if (cantidad>0){
            //console.log( 'inicioUsado: ' +inicioUsado + ' inico[iniciuUsado]' + inicio[inicioUsado] +  '  finUsado ' +finUsado + ' fin[finUsado] '+ fin[finUsado])
            correccionArray = letrasNuevas.filter((letra,ind)=> ind>inicio[inicioUsado] && ind<fin[finUsado])
            //console.log('correccionArray: '+correccionArray.reverse() + ' cantidad: '+cantidad)


            //correccionArray.reverse()
            


            //console.log('letrasNuevas: ' +letrasNuevas)
            letrasNuevas.splice(primero, (cantidad +1))
            correccionArray.map(correc=> {letrasNuevas.splice(primero, 0,correc) })

            /*letrasNuevas.splice(primero, (cantidad+1),correccionArray)*/ 
            //console.log('letrasNuevas corregidas: ' +letrasNuevas)
            fin.splice(finUsado,1)
            //console.log('resto de fin: ' +fin)

        }

        
    })
    
    console.log('')
    correccion = letrasNuevas.join('')
    return correccion

}





console.log(decodeNode(palabra));

console.log(decodeNode('sa(u(cla)atn)s'))

console.log(decodeNode('(aloh) (yos) (oy)'))

console.log(decodeNode('hola soy (sov)'))
console.log(decodeNode('(sov yos aloh)'))
console.log(decodeNode('((hola) (soy) (yo)) '))
console.log(decodeNode( '(' +decodeNode('((hola) (soy) (yo)) ') + ')'))
console.log(decodeNode('(((hola) (soy) (yo)))'))

//console.log( 'fin del dolor: ' +decodeNode('sa(u(cla)atn)s'))