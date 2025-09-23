//adiviar
const secreto = Math.floor(Math.random() * 10) + 1;
let intento;
while (intento !== secreto) {
  intento = parseInt(prompt("Adivina el número del 1 al 10:"));
}
console.log("¡Correcto! El número era " + secreto);
