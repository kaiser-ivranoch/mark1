//contar pares
function contarPares(array) {
  let totalPares = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      totalPares++;
    }
  }
  return totalPares;
}

const numeros2 = [2, 7, 4, 9, 10, 3];
console.log(contarPares(numeros2)); 