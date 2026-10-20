ARCHIVO HTML

ARCHIVO JS

1 - Capturamos tanto el formulario como los inputs que entan en el HTML

2 - Creamos una variable listaPeliculas donde guardaremos un array con todos los datos rellenados del formulario

3 - Creamos un evento tipo "submit" para el formulario:

    3.1 - Congelamos la ejecucion del formulario con un preventDefault() para validar bien los datos al ser rellenaos y asi evitamos que se recargue la pagina y se pierda datos

    3.2 - Creamos una Expresion regular la validar el año conforme lo que se nos solicita y hacemos una validacion usando if y else, aplicando un poco de estilo para destacar mensajes.

    3.3 - Creamos una variable "data" donde guardamos todos los datos rellenados del formulario.

    3.4 - Convertimos los datos en un array de objetos

    3.5 - Hacemos un push() a la varible declarada en el punto 2 pasando como argumento la variable donde convertimos los datos en un objeto

    3.6 - Llamamos a la funcion que va a encargarse de pintar en el DOOM los datos rellenados en el form 

    3.7 - Resetemos el formulario

4 - Creamos una funcion donde pintaremos los datos del formulario en el DOOM 

ARCHIVO CSS