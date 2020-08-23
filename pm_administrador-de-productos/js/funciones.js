function mostrarOcultarRegistros(referencia, accion = '') {
    if (referencia == 'categorias') {
        if (localStorage.getItem('categorias')) {
            llenarTablaCategorias();
        } else {
            alert('No hay categorias registradas');
            return;
        }
    } else {
        console.log('para cuando trabajemos con productos');
        // if (localStorage.getItem('categorias')) {
        //     llenarTablaCategorias();
        // } else {
        //     alert('No hay categorias registradas');
        //     return;
        // }
    }

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

function asignarId(array) {
    let id = array.length == 0 ? 1 : array[array.length - 1].id + 1;
    return id;
}

function existeCategoria(categoria, codigoEditar, descEditar) {
    // validando si hay categorias registradas
    if (localStorage.getItem('categorias')) {
        let categorias = JSON.parse(localStorage.getItem('categorias'));

        // validando los posibles casos para no registrar la categoria
        for (let i = 0; i < categorias.length; i++) {
            if (categorias[i].codigo == codigoEditar || categorias[i].descripcion == descEditar) continue;

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

    tbody.innerHTML = '';

    for (let i = 0; i < categorias.length; i++) {
        // creando los elementos HTML
        let tr = document.createElement('tr');
        let tdNumero = document.createElement('td');
        let tdCodigo = document.createElement('td');
        let tdDescripcion = document.createElement('td');
        let tdAcciones = document.createElement('td');
        let accionEliminar = document.createElement('a');
        let accionEditar = document.createElement('a');

        // dandole los atributos necesarios
        tdNumero.setAttribute('class', 'centrar');
        tdCodigo.setAttribute('class', 'centrar');
        tdAcciones.setAttribute('class', 'acciones');
        accionEliminar.setAttribute('href', '#');
        accionEditar.setAttribute('href', '#');
        accionEliminar.setAttribute('onclick', `eliminarRegistro(${categorias[i].id}, 'categorias')`);
        accionEditar.setAttribute('onclick', `editarCategoria(${categorias[i].id})`);

        // dandole un valor que se va a mostrar en la tabla
        tdNumero.innerHTML = i + 1;
        tdCodigo.innerHTML = categorias[i].codigo;
        tdDescripcion.innerHTML = categorias[i].descripcion;
        accionEliminar.innerHTML = 'Eliminar';
        accionEditar.innerHTML = 'Editar';

        // añadiendo los elementos hijos a sus respectivos elementos padres
        tdAcciones.appendChild(accionEliminar);
        tdAcciones.appendChild(accionEditar);
        tr.appendChild(tdNumero);
        tr.appendChild(tdCodigo);
        tr.appendChild(tdDescripcion);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
}

function eliminarTodoRegistros(nombre) {
    localStorage.removeItem(nombre);
    location.reload();
}

function eliminarRegistro(id, referencia) {
    let registros = JSON.parse(localStorage.getItem(referencia));
    let registrosAguardar;

    if (registros.length > 1) {
        registrosAguardar = registros.filter((value) => value.id != id);
        localStorage.setItem(referencia, JSON.stringify(registrosAguardar));
    } else {
        localStorage.removeItem(referencia);
        return location.reload();
    }

    if (referencia == 'categorias') mostrarOcultarRegistros('categorias', 'mostrar');
}

function editarCategoria(id) {
    let categorias = categoriasGuardadas();

    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i].id == id) {
            categorias[i].editar = true;
            llenarFormularioCategoria(categorias[i].codigo, categorias[i].descripcion);
        }
    }

    localStorage.setItem('categorias', JSON.stringify(categorias));
    localStorage.setItem('id_categoria_editar', id);
}

function llenarFormularioCategoria(codigo, descripcion) {
    mostrarOcultarRegistros('categorias', 'ocultar');
    document.getElementById('codigo').value = codigo;
    document.getElementById('descripcion').value = descripcion;
}

function indexCategoriaEditando() {
    let idCategoria = localStorage.getItem('id_categoria_editar');
    let categorias = categoriasGuardadas();

    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i].id == idCategoria) return i;
    }

    return false;
}

// FUNCIONES PARA LA PAJINA DE PRODUCTOS
function llenarSelectCategorias() {
    let categorias = JSON.parse(localStorage.getItem('categorias'));
    let selectCategorias = document.getElementById('categoria');

    selectCategorias.innerHTML = null;

    let option = document.createElement('option');

    option.setAttribute('selected', 'selected');
    option.setAttribute('disabled', 'disabled');
    option.innerHTML = 'Seleccionar...';

    selectCategorias.appendChild(option);

    for (let i = 0; i < categorias.length; i++) {
        let optionCategoria = document.createElement('option');

        optionCategoria.setAttribute('value', categorias[i].descripcion);
        optionCategoria.innerHTML = categorias[i].descripcion;

        selectCategorias.appendChild(optionCategoria);
    }
}