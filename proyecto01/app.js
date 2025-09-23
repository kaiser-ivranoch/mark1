function busquedalineal(arr, elemento){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === elemento){
            return i;
        }
    }
    return -1;
}

const arreglo = [10, 5, 3, 8, 2, 6];
const elementobuscado = 2;
const indice = busquedalineal(arreglo, elementobuscado);
console.log(`El valor ${elementobuscado} se encuentra en el índice ${indice}`);