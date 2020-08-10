document.getElementById('formCategoria').addEventListener('submit', (e) => {
    e.preventDefault();

    let categorias = [];
    let id = 0;

    // OBTENIEDO LOS VALORES DEL FORMULARIO
    //el objeto FormData se rellenará con las claves/valores actuales del formulario mediante la propiedad name de cada elemento para las claves y su valor enviado para los valores.
    let datosFormulario = new FormData(document.getElementById('formCategoria'));
    // El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
    let cateoria = Object.fromEntries(datosFormulario);

    // AÑADIENDOLE OTROS ATRIBUTOS
    cateoria.id = id++;
    cateoria.relacionada = false;

    // GUARDANDO LA NUEVA CATEGORIA EN EL ARRAY CATEGORIAS
    categorias.push(cateoria);

    console.log(categorias);

    // GUARDANDO EN EL LOCALSTORAGE LAS CATEGORIAS
    localStorage.setItem('categorias', JSON.stringify(categorias));
});