function checkIsValidCopy(original, copy) {
    const ori = original.split('')
    const cop = copy.split('')
    const posibles = ['#' , '+' , ':' , '.' ,' ']
  
    //por cada caracter de ori
    /*const distinto = cop.map((element,i) => 
        element !== ori[i]  || posibles.includes(element)? false:element
    );*/
  


    const distinto = cop.map((element,i) => {
        if (posibles.includes(element) && ori[i] !== ' ' ) {
            return ori[i].toLowerCase();
        } else {
            return element.toLowerCase();
        }
    });
  

    //console.log(distinto)
    //console.log(ori)

    let respuesta = true
    distinto.forEach((element,i) => {
        if (element !== ori[i].toLowerCase()) {
            console.log('element: (' + element + ') en i:' + i+' ori[i]: (' + ori[i]+')')
            respuesta = false
        }
            
         
    });
  
  
    return respuesta
}


console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)

console.log(checkIsValidCopy('Santa Claus is coming','sa#ta Cl#us i+ comin#')) // true
console.log(checkIsValidCopy('s#nta Cla#s is coming','p#nt: cla#s #s c+min#'))  // false (por la p inicial))