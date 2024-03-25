function autonomousDrive(store, movements) {
    const tienda = store.map(row =>  row.split(''));
    
    
    //donde esta robo
    let robo = ''
    let filaRobo = 99
    tienda.forEach((fila,i) => {
        if (robo==='') {
            robo = fila.findIndex(e=> e==='!')
            console.log(robo)
            //eliminamos a robo T.T
            filaRobo=i
            console.log('fila robooo: '+filaRobo)
            fila.splice(robo,1,'.')
            console.log(fila)
        }
    });
    

    //se mueve robooo
    movements.forEach(letra => {
        switch (letra) {
            case 'R':
                if (tienda[filaRobo][robo+1]==='.') {
                    tienda[filaRobo].splice(robo,1,'.')
                    tienda[filaRobo].splice(robo+1,1,'!')
                    robo++
                    console.log('derecha robo: ' + tienda)
                }
            break;
            case 'L':
                if (tienda[filaRobo][robo-1]==='.') {
                    tienda[filaRobo].splice(robo,1,'.')
                    tienda[filaRobo].splice(robo-1,1,'!')
                    robo--
                    console.log('izquierda robo: ' + tienda)
                }
            break;
                
            case'D':
                if (tienda[filaRobo+1][robo]==='.') {
                    tienda[filaRobo].splice(robo,1,'.')
                    tienda[filaRobo+1].splice(robo,1,'!')
                    filaRobo++
                    console.log('baja robo: ' + tienda)
                }
            break;

            case'U':
                if (tienda[filaRobo-1][robo]==='.') {
                    tienda[filaRobo].splice(robo,1,'.')
                    tienda[filaRobo-1].splice(robo,1,'!')
                    filaRobo--
                    console.log('sube robo: ' + tienda)
                }
            break;

    
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
            break;
        }
    
    });
    


    return tienda.map(e=>e.join(''))
}






const store = ['..!.*..', '...*.*.']

const movements = [ 'D', 'L','U']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/




/**chatGPT 1:
 
 * function autonomousDrive(store, movements) {
        const tienda = store.map(row => row.split(''));

        // Encontrar la posición inicial del robot
        let roboRow = 0;
        let roboCol = 0;
        tienda.forEach((fila, i) => {
            const roboIndex = fila.indexOf('!');
            if (roboIndex !== -1) {
                roboRow = i;
                roboCol = roboIndex;
            }
        });

        // Convertir movements en un array de letras
        const movementsArray = movements.split('');

        movementsArray.forEach(letra => {
            switch (letra) {
                case 'R':
                    if (roboCol + 1 < tienda[0].length && tienda[roboRow][roboCol + 1] === '.') {
                        tienda[roboRow][roboCol] = '.';
                        tienda[roboRow][roboCol + 1] = '!';
                        roboCol++;
                    }
                    break;
                case 'L':
                    if (roboCol - 1 >= 0 && tienda[roboRow][roboCol - 1] === '.') {
                        tienda[roboRow][roboCol] = '.';
                        tienda[roboRow][roboCol - 1] = '!';
                        roboCol--;
                    }
                    break;
                case 'D':
                    if (roboRow + 1 < tienda.length && tienda[roboRow + 1][roboCol] === '.') {
                        tienda[roboRow][roboCol] = '.';
                        tienda[roboRow + 1][roboCol] = '!';
                        roboRow++;
                    }
                    break;
                case 'U':
                    if (roboRow - 1 >= 0 && tienda[roboRow - 1][roboCol] === '.') {
                        tienda[roboRow][roboCol] = '.';
                        tienda[roboRow - 1][roboCol] = '!';
                        roboRow--;
                    }
                    break;
                default:
                    break;
            }
        });

        return tienda.map(e => e.join(''));
    }

 

 **chatGPT 2:
 
    function autonomousDrive(store, movements) {
        const tienda = store.map(row => row.split(''));
        let filaRobo = tienda.findIndex(fila => fila.includes('!'));
        let robo = tienda[filaRobo].indexOf('!');

        movements.forEach(letra => {
            let nuevaFilaRobo = filaRobo;
            let nuevaRobo = robo;

            switch (letra) {
                case 'R':
                    nuevaRobo++;
                    break;
                case 'L':
                    nuevaRobo--;
                    break;
                case 'D':
                    nuevaFilaRobo++;
                    break;
                case 'U':
                    nuevaFilaRobo--;
                    break;
                default:
                    // No hacer nada para otros movimientos
                    break;
            }

            if (tienda[nuevaFilaRobo] && tienda[nuevaFilaRobo][nuevaRobo] === '.') {
                tienda[filaRobo][robo] = '.';
                tienda[nuevaFilaRobo][nuevaRobo] = '!';
                filaRobo = nuevaFilaRobo;
                robo = nuevaRobo;
                console.log('Movimiento: ' + letra + ' - Nueva posición: ' + tienda.map(row => row.join('')).join('\n'));
            }
        });

        return tienda.map(row => row.join(''));
    }


 */