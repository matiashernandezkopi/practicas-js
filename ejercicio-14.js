function maxGifts(houses) {

    const casas = houses

    


    const respuesta = casas.map((e, i) => {
        
        if (e >= casas[i - 1] && e >= casas[i + 1]) {
            casas[i - 1] = 0
            casas[i + 1] = 0
            return e
        }else if(e >= casas[i - 1] && i === casas.length -1){
            if (casas[i - 1] > casas[i-2]) {
                return 0
            }else{
                casas[i - 1] = 0
                return e
            }
            
        }else if(e >= casas[i + 1] && i === 0){
            if (casas[i + 1] > casas[i+2]) {
                return 0
            }else{
                casas[i + 1] = 0
                return e
            }
        }
        
        return e
            



        //}
        // Para el primer y último elemento, solo comparamos con una casa adyacente
        /*else if (i === 0) {
            if (e>=casas[i + 1]) {
                casas [i + 1] = 0
            }
            
            return e >=casas[i + 1];
        } else if (i === casas.length - 1) {
            if (e >= casas[i - 1]) {
                casas [i - 1] = 0
            }
            
            return e >= casas[i - 1];
        }*/
    });
    

    


    console.log('casas: '+respuesta)


    //const final = respuesta.reduce((accumulator, currentValue) => accumulator + currentValue, 0);





    return casas
}


console.log(maxGifts([2, 4, 2])) //4
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])) // 103 (3 + 100)
console.log(maxGifts([1, 2, 3, 1]))