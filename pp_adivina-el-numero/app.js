const numeroGenerado = Math.round(Math.random() * 100) + 1;
const mensajeEsMayor = document.getElementById('mensajeNumAlto');
const mensajeEsMenor = document.getElementById('mensajeNumBajo');
const mensajeDeGano = document.getElementById('mensajeGano');
const mensajeDePerdio = document.getElementById('mensajePerdio');

let intentos = document.getElementById('intentos');
let contadorIntentos = 5;

document.getElementById('formJuego').addEventListener('submit', (e) => {
    e.preventDefault();

    let numeroDigitado = document.getElementById('numero').value;

    ocultarMensajes();

    if (contadorIntentos > 1) {
        if (numeroDigitado > numeroGenerado) mensajeEsMayor.style.display = 'block';
        if (numeroDigitado < numeroGenerado) mensajeEsMenor.style.display = 'block';
        if (numeroDigitado == numeroGenerado) {
            ocultarInput();
            mensajeDeGano.style.display = 'block';
        }
    } else {
        ocultarInput();
        mensajeDePerdio.style.display = 'block';
        console.log('no hay intentos');
    }

    document.getElementById('numeroIntentos').innerHTML = intentos.innerHTML = contadorIntentos--;
});

function ocultarMensajes() {
    mensajeEsMayor.style.display = 'none';
    mensajeEsMenor.style.display = 'none';
    mensajeDeGano.style.display = 'none';
    mensajeDePerdio.style.display = 'none';
}

function ocultarInput() {
    document.getElementById('display').style.display = 'none';
}