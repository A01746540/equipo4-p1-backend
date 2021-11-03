# equipo4-p1-backend

# Equipo4AlexisyMaxine - Practica Backend

## Instrucciones para probarlo

### Para crear un objeto
No permite duplicados y si lo intentas se incrementa el contador

POST
```
http://localhost:8084/canciones/postAgregarCancion
```
```
{
    "ciudad":"Washington DC",
    "pais":"EEUU",
    "descripcion":"Monumento Washington",
    "contador":1
}
```
### Para obtener la lista de ciudades POR PAIS
GET
```
http://localhost:8084/ciudades/obtenerCiudadporPais
```
```
{
    "pais":"México"
}
```
### Para obtener la lista de ciudades TOTAL
GET
```
http://localhost:8084/ciudades/obtenerCiudad
```
```
{

}
```
### Para borrar una ciudad
POST
```
http://localhost:8084/ciudades/borrarCiudad
```
```
{
    "ciudad":"Rio de Janeiro"
}
```
### Para actualizar una ciudad
POST
```
http://localhost:8084/ciudades/actualizarCiudad
```
```
{
    "ciudad":"México",
    "pais":"Estados Unidos Mexicanos",
    "descripcion":"Hola, este es un cambio de descripción"
}
```
