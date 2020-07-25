const caja = document.getElementById('cuadro');

if (localStorage.getItem('colorGuardado')) caja.style.backgroundColor = localStorage.getItem('colorGuardado');

function colorear(valor) {
    let color = colores(valor);

    caja.style.backgroundColor = color;
    localStorage.setItem('colorGuardado', color);
}

function colores(color) {
    const Amarillo = '#fad201';
    const Rojo = '#ff0000';
    const Verde = '#008f39';
    const Azul = '#2271b3';

    let colorSeleccionado = '';

    if (color == 'Amarillo') colorSeleccionado = Amarillo;
    if (color == 'Rojo') colorSeleccionado = Rojo;
    if (color == 'Verde') colorSeleccionado = Verde;
    if (color == 'Azul') colorSeleccionado = Azul;

    return colorSeleccionado;
}