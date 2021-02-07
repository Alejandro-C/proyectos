# luzes de Semaforo

Abrir Programa: https://pp-semaforo-sencillo.netlify.app/

Este programa muestra en pantalla un semaforo en el cual al pasar el puntero sobre alguna de las 3 luzes este iluminara la luz en la que el puntero esté.

## Explicacion del Codigo

### Documento HTML
Primero creamos la estructura basica de un documento HTML y la configuramos a nuestra preferencia.

```
<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Semaforo Sencillo</title>
    </head>
    <body>

    </body>
</html>
```

Luego creamos un DIV contenedor y dentro creamos tres DIVs y les asignamos a cada DIV sus clases y un ID a los DIVs hijos.

```
<body>
    <div class="contenedor-semaforo">
        <div class="bombillo bombillo-rojo" id="rojo"></div>
        <div class="bombillo bombillo-amarillo" id="amarillo"></div>
        <div class="bombillo bombillo-verde" id="verde"></div>
    </div>
</body>
```

Ahora para darle estilo a nuestra estructura creamos un archivo CSS y lo referenciamos en nuestro documento HTML con la etiqueta `<link>` dentro de la etiqueta `<head>`. En nuetro caso el archivo CSS lo nombramos como "styles.css".

```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semaforo Sencilo</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

Hasta este momento si ejecutamos el programa no observaremos nada en pantalla ya que falta darle los estilos y eso lo haremos ahora.

### Documnto CSS

Para que nuestra estuctura HTML tome forma le vamos a dar los siguientes estilos en nuestro documento CSS.  

```
body {
    background-color: #eeeeee; con esto opacamos un poco el fondo
}
 
div.contenedor-semaforo {  
    background-color: #333333;
    width: 250px;
    min-height: 35rem;
    margin: 5% auto;
    border-radius: 40px;
    box-shadow: 0 0 20px #333333;
    display: flex;  
    flex-direction: column;  
    align-items: center;  
    justify-content: space-evenly;  
}  
  
div.bombillo {
    background-color: #aaaaaa;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 20px #111111;
    transition: all .3s ease;
}

div.bombillo-rojo {
    background-color: red;
}

div.bombillo-amarillo {
    background-color: yellow;
}

div.bombillo-verde {
    background-color: green;
}
```
Bien ahora que temos los estilos puestos si ejecutamos el programa vamos a observar nuestro semaforo pero por ahora no funciona, porlo que procederemos a darle vida a nuestro proyecto con JavaScript. Para referenciar un archivo JavaScrit utilizaremos la etiqueta `<script>` y lo pondremos al final antes de cerrar el elemnto `</body>`. en nuestro caso el documento JavaScript lo nombramos como "app.js".

```
<body>
    <div class="contenedor-semaforo">
        <div class="bombillo bombillo-rojo" id="rojo"></div>
        <div class="bombillo bombillo-amarillo" id="amarillo"></div>
        <div class="bombillo bombillo-verde" id="verde"></div>
    </div>

    <script src="app.js"></script>
</body>
```

### Documento JavasScript

Primero vamos a seleccionar los tres elementos que corresponden a los bombillos, los vamos a seleccionar por su ID que se les asignó a cada uno.

```
let bombilloRojo = document.getElementById('rojo');
let bombilloAmarillo = document.getElementById('amarillo');
let bombilloVerde = document.getElementById('verde');
```

La siguiente funcion es para resetar la iluminación (apagar el bombillo)

```
function off() {
    this.style.boxShadow = "0 0 20px #111111";
}
```

Ahora usaremos un metodo para escuchar un evento en este caso el evento es "mouseover" para cuando el cursos este sobre un elemento y el evento "mouseout" que es para cuando el cuersor este fuera de un elemnto 

Para hacer el efecto de iluminacion de un bombillo usaremos el metodo "addEventListener" que resive dos parametros el primero es el nombre del evento y el segundo es la accion para cuando suceda el evento

Linea de codigo para encender un bombillo:

```
bombilloRojo.addEventListener('mouseover', () => bombilloRojo.style.boxShadow = "0 0 30px red");
bombilloAmarillo.addEventListener('mouseover', () => bombilloAmarillo.style.boxShadow = "0 0 30px yellow");
bombilloVerde.addEventListener('mouseover', () => bombilloVerde.style.boxShadow = '0 0 30px green');

linea de codigo para apagar un bombillo:
bombilloRojo.addEventListener('mouseout', off);
bombilloAmarillo.addEventListener('mouseout', off);
bombilloVerde.addEventListener('mouseout', off);
```
