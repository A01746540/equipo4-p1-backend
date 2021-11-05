# equipo4-p1-backend

# Equipo4AlexisyMaxine - Practica Backend

## Instrucciones para probarlo

### Para CANCIONES

### Para agregar una canción:
POST
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
POST
```
http://localhost:8084/canciones/obtenerCancionPorTitulo
```
```
{
    "titulo":"Asinanona"
}
```
### Para obtener una canción por artista: 
POST
```
http://localhost:8084/canciones/obtenerCancionPorArtista
```
```
{
    "artista":"Redimi2"
}
```
### Para obtener una canción por álbum: 
POST
```
http://localhost:8084/canciones/obtenerCancionPorAlbum
```
```

    "album":"Asinanona"
}
```
### Para obtener una canción por género: 
POST
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
### Para agregar una libro:
POST
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
### Para obtener una libro por Autor: 
POST
```
http://localhost:8084/libros/obtenerLibroPorAutor
```
```
{
    "autor":"SEP"
}
```
### Para LISTAS DE REPRODUCCIÓN

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
### Para obtener listas de reproducción:
GET
```
http://localhost:8084/listareproduccion/obtenerListasReproduccion
```
```
{

}
```
### Para agregar listas de reproducción:
POST
```
http://localhost:8084/listareproduccion/agregarListasReproduccion
```
```
{
    "nombre":"Musica Para Salvar el Semestre",
    "descripcion":"Esta playlist se usa cuando necesitas salvar el semestre",
    "tipo_elemento":"0",
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

}
```
### Para obtener listas de reproducción por usuario:
GET
```
http://localhost:8084/listareproduccion/obtenerListasReproduccionPorUsuario
```
```
{

}
```
