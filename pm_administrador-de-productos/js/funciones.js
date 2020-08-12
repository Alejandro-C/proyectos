function mostrarOcultarRegistros(accion = '') {
    llenarTablaCategorias();

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

function llenarTablaCategorias() {
    let categorias = categoriasGuardadas();
    let tbody = document.getElementById('tbodyCategorias');

    for (let i = 0; i < categorias.length; i++) {
        let tr = document.createElement('tr');
        let tdNumero = document.createElement('td');
        let tdCodigo = document.createElement('td');
        let tdDescripcion = document.createElement('td');
        let tdAcciones = document.createElement('td');
        let accionEliminar = document.createElement('a');
        let accionEditar = document.createElement('a');

        tdNumero.setAttribute('class', 'centrar');
        tdCodigo.setAttribute('class', 'centrar');
        tdAcciones.setAttribute('class', 'acciones');
        accionEliminar.setAttribute('href', '#');
        accionEditar.setAttribute('href', '#');

        tdNumero.innerHTML = categorias[i].id + 1;
        tdCodigo.innerHTML = categorias[i].codigo;
        tdDescripcion.innerHTML = categorias[i].descripcion;
        accionEliminar.innerHTML = 'Eliminar';
        accionEditar.innerHTML = 'Editar';

        tdAcciones.appendChild(accionEliminar);
        tdAcciones.appendChild(accionEditar);
        tr.appendChild(tdNumero);
        tr.appendChild(tdCodigo);
        tr.appendChild(tdDescripcion);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
}