


function revealSabotage(store) {
    const tiendo = store
    const bombas = []
    store.forEach((fila, y) => {
        const x = fila.findIndex(e => e === '*');
        if (x !== -1) {
            bombas.push([x,y])
        }
    });


    console.log(bombas);




    bombas.forEach(e=>{
        let bombaX= e[0]-1
        let bombaY = e[0]-1
        let condition = 0
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                const nuevo = tiendo[bombaY+y][bombaX+x]
                //fata pasarlo de string a numero
                //y si no es un numero pasarlo a 1
                //si es un numero, sumarle 1
                tiendo[bombaY+y].splice(bombaX+x,1,nuevo)
                
            }


            
        }
        
    })




    return []
}








const store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
]
console.log(revealSabotage(store))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/