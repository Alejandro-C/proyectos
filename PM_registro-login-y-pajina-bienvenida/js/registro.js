var idFormulario = 'formRegistro';
var editandoDatos = false;

// si existe este elemento es por que estamos en la pagina de bievanida
if (document.getElementById('nuevosDatosPersonales')) {
    var idUsuarioIngresado = JSON.parse(localStorage.getItem('idUsuarioIngresado'));
    idFormulario = 'nuevosDatosPersonales';
    editandoDatos = true;
}

document.getElementById(idFormulario).addEventListener('submit', (e) => {
    e.preventDefault();

    // obteniendo datos del formulario
    let form = new FormData(document.getElementById(idFormulario));
    let usuario = Object.fromEntries(form);
    let usuarios = [];
    let id = 0;

    if (localStorage.getItem('usuarios')) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
        console.log('antes');
        console.log(usuarios[idUsuarioIngresado]);
        id = usuarios.length;

        if (validarEmail(usuario.email, usuarios)) return;
    }

    editandoDatos ? usuario.id = idUsuarioIngresado : usuario.id = id;

    // validando campos
    if (usuario.password != usuario.repetirPassword) return alert('Las contrañas no coinciden');
    if (!usuario.sexo) usuario.sexo = 'humano';
    if (!usuario.pais) return alert('El campo pais es obligatorio');
    if (!usuario.ciudad) return alert('El campo ciudad es obligatorio');
    if (!usuario.direccion) usuario.direccion = 'vacio';

    if (!editandoDatos) {
        usuarios.push(usuario);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('El registro sea guarado');

        location.href = 'login.html';
    } else {
        usuarios[idUsuarioIngresado] = usuario;

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Los datos de han actualizado');

        location.href = 'bienvenida.html';
    }
});

function validarEmail(email, registros) {
    for (let i = 0; i < registros.length; i++) {
        if (editandoDatos && registros[i].email == email) continue;

        if (registros[i].email == email) {
            alert('El email ya esta registrado');
            return true;
        }
        return false
    }
}

// EVENTO ONCHANGE
function paisSeleccionado(pais) {
    let ciudadesColombia = ["Bogota", "Mocoa", "Medellin", "Pasto"];
    let ciudadesArgentina = ["Buenos Aires", "Rosario", "Mar del Plata", "Mendoza"];
    let ciudadesBrasil = ["Rio de Janeiro", "São Paulo", "Fortaleza", "Natal"];
    let ciudadesMexico = ["Ciudad de Mexico", "Guadalajara", "Monterrey", "Cancún"];

    if (pais == 'Argentina') crearCiudades(ciudadesArgentina);
    if (pais == 'Brasil') crearCiudades(ciudadesBrasil);
    if (pais == 'Colombia') crearCiudades(ciudadesColombia);
    if (pais == 'Mexico') crearCiudades(ciudadesMexico);
}

function crearCiudades(ciudades) {
    let selectCiudad = 'ciudad';

    if (editandoDatos) selectCiudad = 'nuevaCiudad';

    //reseteando el campo select de ciudad
    if (document.getElementById(selectCiudad).length > 1) eliminarCiudades();

    // creando las opciones
    for (let i = 0; i < ciudades.length; i++) {
        let opcion = document.createElement('option'); //creamos el elemmento

        opcion.setAttribute('value', `${ciudades[i]}`); //le añadimos el valor
        opcion.appendChild(document.createTextNode(`${ciudades[i]}`)); //nombre que se ve en las opciones

        document.getElementById(selectCiudad).appendChild(opcion); //el elemento creado lo ponemos dentro del select
    }
}

function eliminarCiudades() {
    let selectCiudad = 'ciudad';

    if (editandoDatos) selectCiudad = 'nuevaCiudad';

    let select = document.getElementById(selectCiudad);

    //reseteamos el select
    select.innerHTML = "<option value='0' selected='selected' disabled='disabled'>Seleccionar...</option>";
}