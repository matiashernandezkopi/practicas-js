function IOD(tree,indice,mas) {
    const indicePractico = indice+1
    return  tree[indicePractico*2+mas-1]
}


function transformTree(tree) {
    if (tree.length === 0){
        return null
    }
  
    const ramaNormal = {
        valor: null,
        left:null,
        right:null,
    }

    
    

    const objetos = tree.map(valor => {
        if (valor === null) {
            return null;
        } else {
            return {
                value: valor,
                left: null,
                right: null
            };
        }
    });

    
    objetos.forEach((ele,ind) => {
        if (ele === null) {
            return
        }

        const indicePractico = ind+1

        if (objetos[indicePractico*2-1] !== undefined) {
            ele.left = objetos[indicePractico*2-1]
            ele.right = objetos[indicePractico*2]
        }

    });



    return objetos[0]
}




console.log(transformTree([3, 1, 0, 8, 12, null, 1]))