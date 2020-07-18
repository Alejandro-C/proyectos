// tomando los datos guardados en el localStorage
var usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios'));
var idUsuarioIngresado = JSON.parse(localStorage.getItem('idUsuarioIngresado'));
var usuarioIngresado = usuariosRegistrados[idUsuarioIngresado];

//  colocando el nombre en el Header
document.getElementById('spanNombre').innerHTML = usuarioIngresado.nombres;

// colocando los datos del usuario ingresado en los formularios
// formulario de datos personales
document.getElementById('nombres').value = usuarioIngresado.nombres;
document.getElementById('apellidos').value = usuarioIngresado.apellidos;
document.getElementById('email').value = usuarioIngresado.email;
document.getElementById('sexo').value = usuarioIngresado.sexo;
document.getElementById('pais').value = usuarioIngresado.pais;
document.getElementById('ciudad').value = usuarioIngresado.ciudad;
document.getElementById('direccion').value = usuarioIngresado.direccion;
// formulario de editar informacion
document.getElementById('nuevosNombres').value = usuarioIngresado.nombres;
document.getElementById('nuevosApellidos').value = usuarioIngresado.apellidos;
document.getElementById('nuevoEmail').value = usuarioIngresado.email;
document.getElementById('nuevaDireccion').value = usuarioIngresado.direccion;
document.getElementById(usuarioIngresado.sexo).setAttribute('checked', true);

// colocando los usuarios registrados en la tabla
for (let i = 0; i < usuariosRegistrados.length; i++) {
    //creando la fila
    let tr = document.createElement('tr');

    // creando las columnas
    let tdNombres = document.createElement('td');
    let tdApellidos = document.createElement('td');
    let tdPais = document.createElement('td');
    let tdCiudad = document.createElement('td');

    // dandole valor a cada columna
    tdNombres.innerHTML = usuariosRegistrados[i].nombres;
    tdApellidos.innerHTML = usuariosRegistrados[i].apellidos;
    tdPais.innerHTML = usuariosRegistrados[i].pais;
    tdCiudad.innerHTML = usuariosRegistrados[i].ciudad;

    // ponemos las columnas en la fila
    tr.appendChild(tdNombres);
    tr.appendChild(tdApellidos);
    tr.appendChild(tdPais);
    tr.appendChild(tdCiudad);

    // ponemos la fila en la tabla
    document.getElementById('tbody').appendChild(tr);
}