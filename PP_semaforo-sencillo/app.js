let bombilloRojo = document.getElementById('rojo');
let bombilloAmarillo = document.getElementById('amarillo');
let bombilloVerde = document.getElementById('verde');

bombilloRojo.addEventListener('mouseover', () => bombilloRojo.style.boxShadow = "0 0 30px red");
bombilloRojo.addEventListener('mouseout', off);
bombilloAmarillo.addEventListener('mouseover', () => bombilloAmarillo.style.boxShadow = "0 0 30px yellow");
bombilloAmarillo.addEventListener('mouseout', off);
bombilloVerde.addEventListener('mouseover', () => bombilloVerde.style.boxShadow = '0 0 30px green');
bombilloVerde.addEventListener('mouseout', off);

function off() {
    this.style.boxShadow = "0 0 20px #111111";
}