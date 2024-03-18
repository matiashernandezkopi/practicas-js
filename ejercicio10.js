let oranmenta = '123'
let altura = 4



function createChristmasTree(ornaments, height) {
    let arbol = ''
    let decoraciones = ornaments.split('')
    
    console.log('decoraciones: ' +decoraciones)

    //asi nos aseguramos que alla suficientes espacios para cada linea
    //let ancho = height+height+1



    let linea = 0
    let espacios = height
    let letras = 0
    let texto = 0
    while (linea<height+1) {
        console.log('linea: '+linea)
        espacios=height
        console.log('espacios: '+espacios)
        

        //pongo los espacios por linea
        if (linea===0) {
            arbol+=''
        } else {
            while (espacios>linea) {
                arbol+=' '
    
    
    
                espacios--
                console.log('espacios--: '+espacios)
            }
    
        }
        
        //pongo las cosas
            //print un espacio menos por cada linea
            //print ' (decoracion)'
        letras=0
        while (letras<linea) {
            if (texto===decoraciones.length) {
                texto=0
            }

            if (letras===linea-1) {
                arbol+=decoraciones[texto]
            } else {
                arbol+=decoraciones[texto]+' '
            }

            
            texto++

            letras++
        }



        
        linea++
        console.log('linea++: '+linea)
        if (linea>1) {
            arbol+='\n'
        }
        
        console.log(arbol)
    }
    

    
    linea=1
    espacios=height
    
    while (espacios>linea) {
        arbol+=' '



        espacios--
        console.log('espacios--: '+espacios)
    }
    arbol+='|'
    arbol+='\n'


    
    return arbol
}

console.log( createChristmasTree(oranmenta, altura))

console.log(createChristmasTree('*@o', 3))