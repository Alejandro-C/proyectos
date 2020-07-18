var idFormulario = 'formRegistro';

if (document.getElementById('nuevosDatosPersonales')) idFormulario = 'nuevosDatosPersonales';

document.getElementById(idFormulario).addEventListener('submit', (e) => {
    e.preventDefault();

    // obteniendo datos del formulario
    let form = new FormData(document.getElementById(idFormulario));
    let usuario = Object.fromEntries(form);
    let usuarios = [];
    let id = 0;

    if (localStorage.getItem('usuarios')) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
        id = usuarios.length;

        if (validarEmail(usuario.email, usuarios)) return;
    }

    usuario.id = id;

    // validando campos
    if (usuario.password != usuario.repetirPassword) return alert('Las contrañas no coinciden');
    if (!usuario.sexo) usuario.sexo = 'humano';
    if (!usuario.pais) return alert('El campo pais es obligatorio');
    if (!usuario.ciudad) return alert('El campo ciudad es obligatorio');
    if (!usuario.direccion) usuario.direccion = 'vacio';

    usuarios.push(usuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('El registro sea guarado');

    location.href = 'login.html';
});

function validarEmail(email, registros) {
    for (let i = 0; i < registros.length; i++) {
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

    if (pais == 'argentina') crearCiudades(ciudadesArgentina);
    if (pais == 'brasil') crearCiudades(ciudadesBrasil);
    if (pais == 'colombia') crearCiudades(ciudadesColombia);
    if (pais == 'mexico') crearCiudades(ciudadesMexico);
}

function crearCiudades(ciudades) {
    //reseteando el campo select de ciudad
    if (document.getElementById('ciudad').length > 1) eliminarCiudades();

    // creando las opciones
    for (let i = 0; i < ciudades.length; i++) {
        let opcion = document.createElement('option'); //creamos el elemmento

        opcion.setAttribute('value', `${ciudades[i]}`); //le añadimos el valor
        opcion.appendChild(document.createTextNode(`${ciudades[i]}`)); //nombre que se ve en las opciones

        document.getElementById('ciudad').appendChild(opcion); //el elemento creado lo ponemos dentro del select
    }
}

function eliminarCiudades() {
    let select = document.getElementById('ciudad');

    //reseteamos el select
    select.innerHTML = "<option value='0' selected='selected' disabled='disabled'>Seleccionar...</option>";
}