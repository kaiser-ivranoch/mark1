//numero mayor y menor
function mayormenor(array) {
  if (array.length === 0) {
  }

  let mayor = array[0];
  let menor = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
    if (array[i] < menor) {
      menor = array[i];
    }
  }

  return { mayor: mayor, menor: menor };
}
