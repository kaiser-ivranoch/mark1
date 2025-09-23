//primer multiplo de 5
function primerMultiploDe5(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 === 0) {
      return array[i];
    }
  }
  return null;
}

const numerose = [1, 7, 12, 20, 3];
console.log(primerMultiploDe5(numerose));
