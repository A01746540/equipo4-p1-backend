# equipo4-p1-backend

# Equipo4AlexisyMaxine - Practica Backend

## Instrucciones para probarlo

### Para crear un objeto
No permite duplicados y si lo intentas se incrementa el contador

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
### Para agregar una canción:
POST
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
