/*  IN: 
        const gifts = ['tren', 'oso', 'pelota'];
        const materials = 'tronesa'; 
    OUT:es una array con los posibles regalos 
    (necesitan que aparezca cada letra, se repita o no)
        regalosPosibles = []
    

    1 ir un gift a la vez
    2 dividirlo en letras
    3 revisar que este cada letra en materials
        en caso de que FALTE por lo menos una letra, ese regalo no entra

*/
const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';
const regalosPosibles = [];


function regalosFinales(regalos, materiales) {

    /** 1 ir un gift a la vez*/

    /*const listaFinal = regalos.filter(regalo=> {
        /*2 dividirlo en letras
        const partes = regalo.split('')
        console.log(partes)

        /*3 revisar que este cada letra en materials
        en caso de que FALTE por lo menos una letra, ese regalo no entra
        const falta = partes.find(parte=> !materiales.includes(parte));
        console.log(falta)

        
        return falta === undefined
    });*/
    const listaFinal2 = regalos.filter(regalo => regalo
        //dgsg
        .split('')
        //ffaaaas
        .find(parte=> !materiales.includes(parte))=== undefined)

    

    return listaFinal2
}


console.log(regalosFinales(gifts,materials))