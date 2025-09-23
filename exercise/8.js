function sumarPositivos(array) {
  return array
    .filter(num => num > 0)
    .reduce((suma, num) => suma + num, 0);
}

const numerosc=[-3, 4, 2, -1, 5];
console.log(sumarPositivos(numerosc));
