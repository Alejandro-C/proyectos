if (!localStorage.getItem('categorias') || JSON.parse(localStorage.getItem('categorias')).length < 4) {
    let numeroCategorias = JSON.parse(localStorage.getItem('categorias')).length;

    alert(`Tienes que tener almenos cuatro categorias creadas para crear un producto usted tiene: ${numeroCategorias}`);

    location.href = 'categorias.html';
} else {
    llenarSelectCategorias();
}

document.getElementById('formProducto').addEventListener('submit', (e) => {
    e.preventDefault();

    let datosFormulario = new FormData(document.getElementById('formProducto'));
    let producto = Object.fromEntries(datosFormulario);

    if (!producto.categoria) return alert("El campo 'categoria' es obligatorio");

    console.log(producto);

    console.log('guardado');
});