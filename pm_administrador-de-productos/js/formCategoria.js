document.getElementById('formCategoria').addEventListener('submit', (e) => {
    e.preventDefault();

    let categorias = categoriasGuardadas();
    let id = categorias.length;

    // OBTENIEDO LOS VALORES DEL FORMULARIO
    //el objeto FormData se rellenará con las claves/valores actuales del formulario mediante la propiedad name de cada elemento para las claves y su valor enviado para los valores.
    let datosFormulario = new FormData(document.getElementById('formCategoria'));
    // El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
    let categoria = Object.fromEntries(datosFormulario);

    // VALIDANDO SI YA EXISTE LA CATEGORIA QUE SE QUIERE CREAR
    if (existeCategoria(categoria)) return;

    // AÑADIENDOLE OTROS ATRIBUTOS
    categoria.id = id;
    categoria.relacionada = false;
    categoria.editar = false;

    // GUARDANDO LA NUEVA CATEGORIA EN EL ARRAY CATEGORIAS
    categorias.push(categoria);

    // GUARDANDO EN EL LOCALSTORAGE LAS CATEGORIAS
    localStorage.setItem('categorias', JSON.stringify(categorias));
});