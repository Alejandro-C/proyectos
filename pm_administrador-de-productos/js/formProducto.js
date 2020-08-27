if (!localStorage.getItem('categorias') || JSON.parse(localStorage.getItem('categorias')).length < 4) {
    let numeroCategorias = JSON.parse(localStorage.getItem('categorias')).length;

    alert(`Tienes que tener almenos cuatro categorias creadas para crear un producto usted tiene: ${numeroCategorias}`);

    location.href = 'categorias.html';
} else {
    llenarSelectCategorias();
}

document.getElementById('formProducto').addEventListener('submit', (e) => {
    e.preventDefault();

    let productos = [];

    // OBTENIEDO LOS VALORES DEL FORMULARIO
    let datosFormulario = new FormData(document.getElementById('formProducto'));
    let producto = Object.fromEntries(datosFormulario);

    // VALIDANDO QUE SI SELECCIONO UNA CATEGORIA
    if (!producto.categoria) return alert("El campo 'categoria' es obligatorio");

    // AÑADIENDO EL PRODUCTO AL ARREGLO DE PRODUCTOS
    productos.push(producto);

    // GUARDANDO EN EL LOCALSTORAGE
    localStorage.setItem('productos', JSON.stringify(productos));

    return alert('Se guardo el nuevo producto');
});