//buscar elementos
function buscarNombre(lista, nombre) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nombre) {
      return i; 
    }
  }
  return -1; 
}
const nombres=["ana", "Luis", "Pedro", "suarez"];

console.log(buscarNombre(nombres, "Luis"));
