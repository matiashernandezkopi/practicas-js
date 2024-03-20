const original = 'stepor'
const modified = 'stephor'



function findNaughtyStep(original, modified) {
    let respuesta = ''
    
    
    if(original.split('').length<modified.split('').length){
      respuesta = modified
      .split('')
      .find(ele=> !original.split('').includes(ele))
    }else{
      respuesta = original
      .split('')
      .find(ele=> !modified.split('').includes(ele))
    }

    if(respuesta===undefined){
      respuesta = modified.split('').find((e, i) => e !== original.split('')[i])
    }

    return respuesta || ''
}


console.log(findNaughtyStep(original, modified))
