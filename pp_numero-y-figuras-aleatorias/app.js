document.getElementById('btnGenerar').addEventListener('click', () => {
    let mostrarNumero = document.getElementById('numeroGenerado');
    let caja = document.getElementById('cuadro');

    let color = Math.round(Math.random() * 5) + 1;
    let ancho = Math.round(Math.random() * 600) + 50;
    let alto = Math.round(Math.random() * 500) + 50;

    switch (color) {
        case 1:
            caja.style.backgroundColor = '#28a745';
            break;
        case 2:
            caja.style.backgroundColor = '#333333';
            break;
        case 3:
            caja.style.backgroundColor = '#dc3545';
            break;
        case 4:
            caja.style.backgroundColor = '#ffc107';
            break;
        case 5:
            caja.style.backgroundColor = '#28a745';
            break;
        case 6:
            caja.style.backgroundColor = '#007bff';
            break;
    }

    mostrarNumero.innerHTML = color;
    caja.style.width = ancho + 'px';
    caja.style.height = alto + 'px';
});