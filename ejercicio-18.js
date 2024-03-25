function drawClock(time) {
    const tiempo = time.split('')
    console.log(tiempo)

    let result = [
        
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        
    ]
    let mas = 0
    
    tiempo.forEach((element,ind )=> {
        const indUtil = ind*2


        switch (ind) {
            case 1:
                mas = 1
            break;
            case 3:
                mas = 5
            break;
            case 4:
                mas = 7
                
            break;
        
            default:
                break;
        }
        

        switch (element) {
            case '0':
                
                result[0].splice(indUtil+mas,3,'*','*','*')
                result[1].splice(indUtil+mas,3,'*',' ','*')
                result[2].splice(indUtil+mas,3,'*',' ','*')
                result[3].splice(indUtil+mas,3,'*',' ','*')
                result[4].splice(indUtil+mas,3,'*',' ','*')
                result[5].splice(indUtil+mas,3,'*',' ','*')
                result[6].splice(indUtil+mas,3,'*','*','*')
                
                //.splice
            break;

            case '1':
                result[0].splice(indUtil+mas,3,' ',' ','*')
                result[1].splice(indUtil+mas,3,' ',' ','*')
                result[2].splice(indUtil+mas,3,' ',' ','*')
                result[3].splice(indUtil+mas,3,' ',' ','*')
                result[4].splice(indUtil+mas,3,' ',' ','*')
                result[5].splice(indUtil+mas,3,' ',' ','*')
                result[6].splice(indUtil+mas,3,' ',' ','*')
            break;

            case '2':
                result[0].splice(indUtil+mas,3,'*','*','*')
                result[1].splice(indUtil+mas,3,' ',' ','*')
                result[2].splice(indUtil+mas,3,' ',' ','*')
                result[3].splice(indUtil+mas,3,'*','*','*')
                result[4].splice(indUtil+mas,3,'*',' ',' ')
                result[5].splice(indUtil+mas,3,'*',' ',' ')
                result[6].splice(indUtil+mas,3,'*','*','*')
            break;

            case '3':
                result[0].splice(indUtil+mas,3,'*','*','*')
                result[1].splice(indUtil+mas,3,' ',' ','*')
                result[2].splice(indUtil+mas,3,' ',' ','*')
                result[3].splice(indUtil+mas,3,'*','*','*')
                result[4].splice(indUtil+mas,3,' ',' ','*')
                result[5].splice(indUtil+mas,3,' ',' ','*')
                result[6].splice(indUtil+mas,3,'*','*','*')
            break;

            case '4':
                result[0].splice(indUtil+mas,3,'*',' ','*')
                result[1].splice(indUtil+mas,3,'*',' ','*')
                result[2].splice(indUtil+mas,3,'*',' ','*')
                result[3].splice(indUtil+mas,3,'*','*','*')
                result[4].splice(indUtil+mas,3,' ',' ','*')
                result[5].splice(indUtil+mas,3,' ',' ','*')
                result[6].splice(indUtil+mas,3,' ',' ','*')
            break;

            case '5':
                result[0].splice(indUtil+mas,3,'*','*','*')
                result[1].splice(indUtil+mas,3,'*',' ',' ')
                result[2].splice(indUtil+mas,3,'*',' ',' ')
                result[3].splice(indUtil+mas,3,'*','*','*')
                result[4].splice(indUtil+mas,3,' ',' ','*')
                result[5].splice(indUtil+mas,3,' ',' ','*')
                result[6].splice(indUtil+mas,3,'*','*','*')
            break;
        
            case '6':
                result[0].splice(indUtil+mas,3,'*','*','*')
                result[1].splice(indUtil+mas,3,'*',' ',' ')
                result[2].splice(indUtil+mas,3,'*',' ',' ')
                result[3].splice(indUtil+mas,3,'*','*','*')
                result[4].splice(indUtil+mas,3,'*',' ','*')
                result[5].splice(indUtil+mas,3,'*',' ','*')
                result[6].splice(indUtil+mas,3,'*','*','*')
            break;

            case '7':
                result[0].splice(indUtil+mas,3,'*','*','*')
                result[1].splice(indUtil+mas,3,' ',' ','*')
                result[2].splice(indUtil+mas,3,' ',' ','*')
                result[3].splice(indUtil+mas,3,' ',' ','*')
                result[4].splice(indUtil+mas,3,' ',' ','*')
                result[5].splice(indUtil+mas,3,' ',' ','*')
                result[6].splice(indUtil+mas,3,' ',' ','*')
            break;

            case '8':
                result[0].splice(indUtil+mas,3,'*','*','*')
                result[1].splice(indUtil+mas,3,'*',' ','*')
                result[2].splice(indUtil+mas,3,'*',' ','*')
                result[3].splice(indUtil+mas,3,'*','*','*')
                result[4].splice(indUtil+mas,3,'*',' ','*')
                result[5].splice(indUtil+mas,3,'*',' ','*')
                result[6].splice(indUtil+mas,3,'*','*','*')
            break;

            case '9':
                result[0].splice(indUtil+mas,3,'*','*','*')
                result[1].splice(indUtil+mas,3,'*',' ','*')
                result[2].splice(indUtil+mas,3,'*',' ','*')
                result[3].splice(indUtil+mas,3,'*','*','*')
                result[4].splice(indUtil+mas,3,' ',' ','*')
                result[5].splice(indUtil+mas,3,' ',' ','*')
                result[6].splice(indUtil+mas,3,'*','*','*')
            break;
            
            default:
                break;
        }
        
    });

    





    return result
}





drawClock('01:30') // ⬇️

[
    ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
]

