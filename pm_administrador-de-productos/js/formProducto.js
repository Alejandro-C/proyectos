if (!localStorage.getItem('categorias')) {
    alert('Tienes que tener almenos una categoria creada para crear un producto');
    location.href = 'categorias.html';
} else {
    llenarSelectCategorias();
}

document.getElementById('formProducto').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('guardado');
});