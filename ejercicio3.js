/*  1 dividir las palabras a letras en un array
    2 reconocer cual es la array con mas letras 
        si son igual de largas, utilizar "origin"
    
    3 buscar con .find la "discrepancia"
        puede ser una letra distinta
        o en un lugar (index) distinto
            para reconocer el index tengo que usar un contador,
            el cual aumenta cuando el .find encuentra un false
                ejemplo: 
                const discrepancia = array.find((e, indice) => {
                    if (e !== lista[contador]) {
                        return true;  
                    } else {
                        contador++;   
                        return false; 
                    }
                });
    4 devolver (return) la "discrepancia"

*/


 
const origi = 'abcd';
const modificado = 'abcd';



function solve(original,mod) {
    /*1 dividir las palabras a letras en un array */
    const letrasOrig = original.split('');
    const letrasMod = mod.split('');

    console.log("original: "+letrasOrig + " y el mod: "+ letrasMod)

    /*2 reconocer cual es la array con mas letras */
   
    /*3 buscar con .find la "discrepancia" */
    
    let discrepancia = letrasOrig.find((letra, index) => {
        return letra !== letrasMod[index];
    });

    if (discrepancia === undefined) {
        discrepancia = letrasMod.find((letra, index) => {
            return letra !== letrasOrig[index];
        });
    }

    if (discrepancia === undefined) {
        discrepancia = ''
    }

    /*4 devolver (return) la "discrepancia" */
    return discrepancia
}


console.log("discrepancia= " + solve(origi,modificado))