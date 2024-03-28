/*revisar uno por uno los caracteres

switch in case para cada uno

una bariable binaria que si fije si estas en ¿ o no
    mientras este en 1, hacer todos los comandos a una nueva bariable

    cuando ?, sumarle el resultado al original





*/





function compile(code) {
    let resultado = 0
    let condicional = false
    let resultadoCondicional = 0
    let back = false
    let resultadoBack = -1

    const codigo = code.split('');
    let finCondicional = 0

    codigo.forEach((element,index )=> {
        let sumador = 0
        if (condicional === true && index <= finCondicional) {
            return
        }
        
        switch (element) {
            case '+':

                
                resultado ++
                

                break;
            case '-':

                
                resultado --
                

                break;

            case '*':

                
                resultado= resultado*2
                

                break;

            case '%':

                
                resultadoBack = index
                

                break;

            case '<':

                
                if (resultado>=0&&resultadoBack >-1) {
                    const repetir = codigo.filter((e,i) => i<index && i >resultadoBack)
                    const nuevoResultado = compile(repetir.join())
                    resultado += nuevoResultado
                }
                

                break;



            case '¿':
                if (resultado<=0) {
                    finCondicional = codigo.findIndex(e => e === '?')
                    condicional = true
                }
                

                break;    
        
            default:
                break;
        }

        /*if (condicional === true) {
            resultadoCondicional += sumador
        } else if(back === true){
            resultadoBack += sumador
        }else{
            resultado += sumador
        }

        sumador = 0*/

    });





    console.log(resultado);

    return resultado
}







console.log('RESPUESTA: '+compile('++*-') );//3


console.log('RESPUESTA: '+compile('++%++<') );
// 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6




console.log('RESPUESTA: '+compile('++¿+?')) // 3
// 1 + 1 + 1 = 3

console.log('RESPUESTA: '+compile('--¿+++?')) // -2
// - 1 - 1 = -2



console.log('RESPUESTA: '+compile('++<--'));
// 0
// 1 + 1 - 1 - 1 = 0


console.log(compile('-+¿+?'));