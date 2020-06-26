var operacion = document.getElementById('operacionDisplay');

document.getElementById('C').addEventListener('click', () => operacion.value = '');
document.getElementById('=').addEventListener('click', () => operacion.value = eval(operacion.value));

let addCaracter = (caracter) => operacion.value += caracter;