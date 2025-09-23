//validar
let entrada;
do {
  entrada = parseInt(prompt("Ingresa un número mayor que 0:"));
} while (entrada <= 0 || isNaN(entrada));

console.log("Gracias, ingresaste: " + entrada);
