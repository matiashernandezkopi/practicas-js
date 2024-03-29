/*por cada ingrediente, busco si hay una array con el mismo
      en caso de que no la creo
  
      en caso de que si, .push(dish) 
  
    al final, filtro por las arrays que tengan mas de 2 elementos
    
    
*/
function organizeChristmasDinner(dishes) {
    /*const ingrediente = dishes.map(e => e.filter((e,i)=> i >0))
    console.log(ingrediente);*/
    const ingredientesUsados = []
    //por cada plato
    dishes.forEach((e,i) => {
        //plato = platiilo
        const platillo = e[0]
        console.log(platillo,'Pltillo');
        //ingredientes
        e.slice(1).forEach((ingrediente,index)=>{
            

            //ingredientes
            const indexUsado = ingredientesUsados.findIndex((ing)=> ing[0] === ingrediente)
            
            if (indexUsado !== -1) {
                console.log('indexUsado: ',indexUsado);
                ingredientesUsados[indexUsado].push(platillo)
            }else{
                ingredientesUsados.push([ingrediente,platillo])
                console.log('ingrediente ',ingrediente,ingredientesUsados);
                
            }

            console.log(ingredientesUsados);

        })




    });

    const respuesta = ingredientesUsados.filter(e=>e.length >2)
    

    //para ordenar alpabeticamente
    const listaOrdenada = respuesta.map(sublista => {
      const primerElemento = sublista[0];
      const restoElementosOrdenados = sublista.slice(1).sort();
      return [primerElemento, ...restoElementosOrdenados];
    }).sort((a, b) => a[0].localeCompare(b[0]));
    
    
    
    
    
    
    
    return listaOrdenada
}



    
  
 
const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
]
  
console.log('lito: ',organizeChristmasDinner(dishes));
  
  