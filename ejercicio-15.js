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