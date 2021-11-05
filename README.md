# equipo4-p1-backend

# Equipo4AlexisyMaxine - Practica Backend

## Instrucciones para probarlo

### Para CANCIONES

### Para agregar una canción:
POST
```
validaciones:
Campo	        Validación
titulo	        Debe ser un string
duracion	    Debe ser un entero
album	        Debe ser un string
artista	        Debe ser un string
genero	        Debe ser un string
anio            Debe ser un entero
imagen	        Debe ser un string

errores:
Código          Mensaje
Error	        Ya existe una canción con ese nombre
Error       	Error al agregar canción
```
```
http://localhost:8084/canciones/agregarCancion
```
```
{
    "titulo":"Asinanona",
    "duracion":"120",
    "album":"Asinanona",
    "artista":"Redimi2",
    "genero":"rap",
    "anio":"2019",
    "imagen":"asnsakjsa"
}
```
### Para obtener canciones:
GET
```
http://localhost:8084/canciones/obtenerCanciones
```
```
{

}
```
### Para obtener una sola canción:
GET
```
http://localhost:8084/canciones/obtenerCancion
```
```
{
    "id":"1"
}
```
### Para obtener una canción por título: 
GET
```
http://localhost:8084/canciones/obtenerCancionPorTitulo
```
```
{
    "titulo":"Asinanona"
}
```
### Para obtener una canción por artista: 
GET
```
http://localhost:8084/canciones/obtenerCancionPorArtista
```
```
{
    "artista":"Redimi2"
}
```
### Para obtener una canción por álbum: 
GET
```
http://localhost:8084/canciones/obtenerCancionPorAlbum
```
```
{
    "album":"Asinanona"
}
```
### Para obtener una canción por género: 
GET
```
http://localhost:8084/canciones/obtenerCancionPorGenero
```
```
{
    "genero":"rap"
}
```
### Para actualizar una canción:
POST
```
http://localhost:8084/canciones/actualizarCancion
```
```
{
    "id":"1",
    "titulo":"Asinanona",
    "duracion":"120",
    "album":"Asinanona",
    "artista":"Redimi2",
    "genero":"rap",
    "anio":"2020",
    "imagen":"asnsakjsa"
}
```
### Para eliminar una canción:
POST
```
http://localhost:8084/canciones/eliminarCancion
```
```
{
    "id":"1"
}
```
### Para LIBROS

### Para agregar una libro:
POST
```
validaciones:
Campo	        Validación
titulo	        Debe ser un string
autor   	    Debe ser un string
editorial       Debe ser un string
anio            Debe ser un entero

errores:
Código          Mensaje
Error	        Libro ya existe
Error       	Error al agregar libro
```
```
http://localhost:8084/libros/agregarLibro
```
```
{
    "titulo":"Atlas de México xD",
    "autor":"SEP",
    "editorial":"SEP",
    "anio":"2000"
}
```
### Para obtener libros:
GET
```
http://localhost:8084/libros/obtenerLibros
```
```
{

}
```
### Para obtener una sola libro:
GET
```
http://localhost:8084/libros/obtenerLibro
```
```
{
    "id":"1"
}
```
### Para obtener una libro por Autor: 
GET
```
http://localhost:8084/libros/obtenerLibroPorAutor
```
```
{
    "autor":"SEP"
}
```
### Para actualizar una libro:
POST
```
http://localhost:8084/libros/actualizarLibro
```
```
{
    "id":"1",
    "titulo":"Atlas de México",
    "autor":"SEP",
    "editorial":"SEP",
    "anio":"2000"
}
```
### Para eliminar una libro:
POST
```
http://localhost:8084/libros/eliminarLibro
```
```
{
    "id":"1"
}
```
### Para LISTAS DE REPRODUCCIÓN

### Para agregar listas de reproducción:
POST
```
validaciones:
Campo	        Validación
nombre	        Debe ser un string
descripcion     Debe ser un entero
tipo_elemento   Debe ser un string
usuario_name    Debe ser un string

errores:
Código          Mensaje
Error	        Ya existe una lista con ese nombre
Error       	Error al agregar lista de reproduccion
```
```
http://localhost:8084/listareproduccion/agregarListasReproduccion
```
```
{
    "nombre":"Muusica Para Salvar el Semestre",
    "descripcion":"Esta playlist se usa cuando necesitas salvar el semestre",
    "tipo_elemento":"0",
    "usuario_name":"Maxine"
}
```
### Para obtener listas de reproducción:
GET
```
http://localhost:8084/listareproduccion/obtenerListasReproduccion
```
```
{

}
```
### Para obtener una lista de reproducción:
GET
```
http://localhost:8084/listareproduccion/obtenerListaReproduccion
```
```
{
    "nombre":"Muusica Para Salvar el Semestre"
}
```
### Para obtener listas de reproducción por usuario:
GET
```
http://localhost:8084/listareproduccion/obtenerListasReproduccionPorUsuario
```
```
{
     "usuario_name":"Maxine"
}
```
### Para actualizar listas de reproducción:
POST
```
http://localhost:8084/listareproduccion/actualizarListasReproduccion
```
```
{
    "id":"1",
    "nombre":"Musica Para Salvar el Semestre",
    "descripcion":"Esta playlist se usa cuando necesitas salvar el semestre",
    "tipo_elemento":"0",
    "usuario_name":"Maxine"
}
```
### Para eliminar listas de reproducción:
POST
```
http://localhost:8084/listareproduccion/eliminarListasReproduccion
```
```
{
     "id":"1"
}
```
### Para ENLACE LISTAS-CANCIONES

### Para agregar un ENLACE LISTAS-CANCIONES:
POST
```
validaciones:
Campo	        Validación
id_lista	    Debe ser un entero
id_cancion      Debe ser un entero

errores:
Código          Mensaje
Error	        Error al crear lista de canciones
Error       	La lista de reproduccion no existe
Error       	Error al buscar lista de reproduccion
Error       	Error al buscar cancion
```
```
http://localhost:8084/listacanciones/agregarListaCancion
```
```
{
    "id_lista":"1",
    "id_cancion":"1"
}
```
### Para obtener los enlaces LISTAS-CANCIONES:
GET
```
http://localhost:8084/listacanciones/obtenerListasCancion
```
```
{

}
```
### Para obtener TODAS LAS CANCIONES de una lista:
GET
```
http://localhost:8084/listacanciones/obtenerListaCancionPorLista
```
```
{
    "id_lista":"1"
}
```
### Para obtener TODAS LAS LISTAS de una canción:
GET
```
http://localhost:8084/listacanciones/obtenerListaCancionPorCancion
```
```
{
    "id_cancion":"1"
}
```
### Para actualizar ENLACE LISTAS-CANCIONES:
POST
```
validaciones:
Campo	        Validación
id              Debe ser un entero
id_lista	    Debe ser un entero
id_cancion      Debe ser un entero

errores:
Código          Mensaje
Error	        Error al actualizar lista de canciones
Error       	La lista de reproduccion no existe
Error       	Error al buscar lista de reproduccion
Error       	Error al buscar cancion
```
```
http://localhost:8084/listacanciones/actualizarListaCancion
```
```
{
    "id":"1",
    "id_lista":"1",
    "id_cancion":"1"
}
```
### Para eliminar ENLACES LISTAS-CANCIONES por id de la lista:
POST
```
http://localhost:8084/listacanciones/eliminarListaCancion
```
```
{
    "id_lista":"1",
}
```
### Para ENLACE LISTAS-LIBROS

### Para agregar un ENLACE LISTAS-LIBROS:
POST
```
validaciones:
Campo	        Validación
id_lista	    Debe ser un entero
id_libro        Debe ser un entero

errores:
Código          Mensaje
Error	        Error al crear lista de libros
Error       	La lista de reproduccion no existe
Error       	Error al buscar lista de reproduccion
Error       	Error al buscar libro
```
```
http://localhost:8084/listalibros/agregarListaLibro
```
```
{
    "id_lista":"1",
    "id_libro":"1"
}
```
### Para obtener los enlaces LISTAS-LIBROS:
GET
```
http://localhost:8084/listalibros/obtenerListasLibro
```
```
{

}
```
### Para obtener TODOS LOS LIBROS de una lista:
GET
```
http://localhost:8084/listalibros/obtenerListaLibroPorLista
```
```
{
    "id_lista":"1"
}
```
### Para obtener TODAS LAS LISTAS de una libro:
GET
```
http://localhost:8084/listalibros/obtenerListaLibroPorLibro
```
```
{
    "id_libro":"1"
}
```
### Para actualizar ENLACE LISTAS-LIBROS:
POST
```
validaciones:
Campo	        Validación
id              Debe ser un entero
id_lista	    Debe ser un entero
id_libro        Debe ser un entero

errores:
Código          Mensaje
Error	        Error al actualizar lista de libros
Error       	La lista de reproduccion no existe
Error       	Error al buscar lista de reproduccion
Error       	Error al buscar libro
```
```
http://localhost:8084/listalibros/actualizarListaLibro
```
```
{
    "id":"1",
    "id_lista":"1",
    "id_libro":"1"
}
```
### Para eliminar ENLACES LISTAS-LIBROS por id de la lista:
POST
```
http://localhost:8084/listalibros/eliminarListaLibro
```
```
{
    "id_lista":"1",
}
```
