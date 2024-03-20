const original = 'stepor'
const modified = 'stephor'



function findNaughtyStep(original, modified) {
    let respuesta = ''
    if (original.split('').length>modified.split('').length) {
        respuesta = original
        .split('')
        .find(ele=> !modified.split('').includes(ele))
    } else {
        respuesta = modified
        .split('')
        .find(ele=> !original.split('').includes(ele))
    }

    if (respuesta===undefined) {
        respuesta= ''
    }
    return respuesta
}


console.log(findNaughtyStep(original, modified))
