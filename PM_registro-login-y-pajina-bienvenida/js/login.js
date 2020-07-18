let intentosLogearse = 0;
let recordarSecion = false;
let idUsuarioIngresado;

// si hay una secion iniciada y tiene la opcion de recordar activa lo redireccionamos a la pagina de bienvanida
if (localStorage.getItem('recordar')) {
    let recordar = JSON.parse(localStorage.getItem('recordar'));

    if (recordar) location.href = 'bienvenida.html';
}

document.getElementById('formLogin').addEventListener('submit', (e) => {
    e.preventDefault();

    // condiciones globales
    intentosLogearse == 2 ? deshablitarPantalla() : intentosLogearse++;
    if (!localStorage.getItem('usuarios')) return alert('No estas registrado');

    let usuario = Object.fromEntries(new FormData(document.getElementById('formLogin'))); //obtenemos los datos del formulario login

    if (!existeUsuario(usuario.email, usuario.password)) return;
    if (usuario.recordar) recordarSecion = true;

    localStorage.setItem('recordar', JSON.stringify(recordarSecion));
    localStorage.setItem('idUsuarioIngresado', idUsuarioIngresado);

    location.href = 'bienvenida.html';
});

function deshablitarPantalla() {
    document.getElementById('display1').style.display = 'none';
    document.getElementById('display2').style.display = 'block';
    recordarSecion = 0;

    temporizador();
}

function temporizador() {
    let contador = 10;
    let intervalo = setInterval(segundos, 1000);

    function segundos() {
        document.getElementById("segundos").innerHTML = contador;
        --contador;

        if (contador < 0) {
            clearInterval(intervalo);
            location.href = 'login.html';
        }
    }
}

function existeUsuario(email, password) {
    //obtenemos los datos del localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));

    // validamos si los datos del login existen
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email && usuarios[i].password == password) {
            idUsuarioIngresado = i;
            return true;
        }
    }
    alert("Registrate o asegurate de que los datos que digitas sean los correctos");

    return false;
}