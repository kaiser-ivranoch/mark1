function invertirArray(array) {
  let invertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    invertido.push(array[i]);
  }
  return invertido;
}

const nombresb=[1, 2, 3, 4];

console.log(invertirArray(nombresb));
