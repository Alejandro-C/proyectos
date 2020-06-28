const cuadro = document.getElementById('cuadro');

document.getElementById('btnRojo').addEventListener('mouseover', () => cuadro.style.backgroundColor = '#dc3545');
document.getElementById('btnVerde').addEventListener('mouseover', () => cuadro.style.backgroundColor = '#28a745');
document.getElementById('btnAzul').addEventListener('mouseover', () => cuadro.style.backgroundColor = '#17a1b8');
document.getElementById('btnAmarillo').addEventListener('mouseover', () => cuadro.style.backgroundColor = '#ffc107');

function resetCuadro() {
    cuadro.style.backgroundColor = '#dddddd';
}