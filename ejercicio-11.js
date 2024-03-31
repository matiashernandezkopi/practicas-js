/*function getIndexsForPalindrome(word) {
    let respuesta= []
    const palabra = word.split('')
    const palabraReverse = palabra.slice().reverse()
    

    if (palabra.join('') === palabraReverse.join('')) {
        console.log('era igual desde antes');
        return [];
    }
    const largo = palabra.length

    //por cada elemento
    palabra.forEach((letra,i) => {
        //cambiar de posiciones con la letra que sigue
        condition = i
        console.log(condition);
        while (condition < largo) {
            
            

            
            
            [palabra[i], palabra[condition]] = [palabra[condition], palabra[i]];
            const comparacion = palabra.concat().reverse();
            console.log(palabra.join(''),'y',comparacion.join(''));
            
            
            
            if (palabra.join('') === comparacion.join('')) {
                console.log('se acomodo',[i,condition]);
                return [i,condition]
                
                
            }


            [palabra[i], palabra[condition]] = [palabra[condition], palabra[i]];

            
            
            condition++
        }
    });
        
        
        //comparar que sea igual al original dado vuelta
        
        //retunr null si se acaba






    console.log('null');
    return null
}*/



//chatgpt
function getIndexsForPalindrome(word) {
    const palabra = word.split('');
    const palabraReverse = palabra.slice().reverse();

    if (palabra.join('') === palabraReverse.join('')) {
        console.log('era igual desde antes');
        return [];
    }

    const largo = palabra.length;
    let found = false;
    let indexPair = null;

    palabra.forEach((letra, i) => {
        let condition = i;

        while (condition < largo && !found) {
            [palabra[i], palabra[condition]] = [palabra[condition], palabra[i]];
            const comparacion = palabra.concat().reverse();

            if (palabra.join('') === comparacion.join('')) {
                console.log('se acomodo', [i, condition]);
                found = true; // Indicar que se ha encontrado un palíndromo
                indexPair = [i, condition]; // Almacenar los índices
                return; // Salir de la función forEach
            }

            [palabra[i], palabra[condition]] = [palabra[condition], palabra[i]];
            condition++;
        }
    });

    console.log(found ? null : 'null');
    return found ? indexPair : null;
}




getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
/*getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null*/