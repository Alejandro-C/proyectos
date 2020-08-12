function mostrarOcultarRegistros(accion = '') {
    if (accion == 'mostrar') {
        document.getElementById('sectionForm').style.display = 'none';
        document.getElementById('sectionTabla').style.display = 'block';
    } else {
        document.getElementById('sectionForm').style.display = 'block';
        document.getElementById('sectionTabla').style.display = 'none';
    }
}

function categoriasGuardadas() {
    let categorias = [];

    // validando si existen categorias en el localStorage 
    if (localStorage.getItem('categorias')) {
        // llenando el array categorias con las categorias guardadas en el localStorage
        categorias = JSON.parse(localStorage.getItem('categorias'));
    }

    return categorias;
}

function existeCategoria(categoria) {
    // validando si hay categorias registradas
    if (localStorage.getItem('categorias')) {
        let categorias = JSON.parse(localStorage.getItem('categorias'));

        // validando los posibles casos para no registrar la categoria
        for (let i = 0; i < categorias.length; i++) {
            if (categorias[i].codigo == categoria.codigo && categorias[i].descripcion == categoria.descripcion) {
                alert('Esta categoria ya se encuentra registrada');
                return true;
            } else if (categorias[i].codigo == categoria.codigo) {
                alert('El codigo ya esta en uso');
                return true;
            } else if (categorias[i].descripcion == categoria.descripcion) {
                alert('La descripcion ya se encuentra en uso');
                return true;
            }
        }


    }

    return false;
}