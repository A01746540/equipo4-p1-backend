const path = require('path')
const Libro = require('../utils/database').models.libro
const ListaReproduccion = require('../utils/database').models.lista_reproducion
const ListaLibro = require('../utils/database').models.lista_libros

exports.postAgregarListaLibros = (req, res) => {
    Libro.findOne({
        where: { id: req.body.id_libro }
    }).then(libro => {
        if (libro) {
            ListaReproduccion.findOne({
                where: { id: req.body.id_lista }
            }).then(listaR => {
                if (listaR) {
                    ListaLibro.create(req.body)
                        .then(lista => {
                            console.log("Lista de libros creada")
                            res.json(lista)
                        })
                        .catch(err => {
                            console.log("Error al crear lista de libros")
                            res.json(err)
                        })
                } else {
                    res.json({
                        message: "La lista de reproduccion no existe"
                    })
                }
            }).catch(err => {
                console.log("Error al buscar lista de reproduccion")
                res.json(err)
            })
        } else {
            res.json({
                message: "El libro no existe"
            })
        }
    }).catch(err => {
        console.log("Error al buscar libro")
        res.json(err)
    })

}

exports.getListasLibros = (req, res) => {
    ListaLibro.findAll()
        .then(listas => {
            console.log("Lista de libros obtenidas")
            res.json(listas)
        }).catch(err => {
            console.log("Error al obtener lista de libros")
            res.json(err)
        })
}

// getCuandoListas
exports.getCuandoListas = (req, res) => {
    ListaLibro.findAll({
        where: {
            id_lista: req.body.id_lista
        }
    }).then(canciones => {
        console.log("Lista de libros obtenidas")
        res.json(canciones)
    }).catch(err => {
        console.log("Error al obtener lista de libros")
        res.json(err)
    })
}

// getCuandoLibros
exports.getCuandoLibros = (req, res) => {
    ListaLibro.findAll({
        where: {
            id_libro: req.body.id_libro
        }
    }).then(listas => {
        console.log("Lista de libros obtenidas")
        res.json(listas)
    }).catch(err => {
        console.log("Error al obtener lista de libros")
        res.json(err)
    })
}

exports.postActualizarListaLibros = (req, res) => {
    Libro.findOne({
        where: { id: req.body.id_libro }
    }).then(libro => {
        if (libro) {
            ListaReproduccion.findOne({
                where: { id: req.body.id_lista }
            }).then(listaR => {
                if (listaR) {
                    ListaLibro.update(req.body, {
                        where: {
                            id: req.body.id
                        }
                    }).then(lista => {
                        console.log("Lista de libros actualizada")
                        res.json({ estado: "Se modificaron exitosamente las listas", lista: lista })
                    }).catch(err => {
                        console.log("Error al actualizar lista de libros")
                        res.json(err)
                    })
                } else {
                    res.json({
                        message: "La lista de reproduccion no existe"
                    })
                }
            }).catch(err => {
                console.log("Error al buscar lista de reproduccion")
                res.json(err)
            })
        } else {
            res.json({
                message: "La cancion no existe"
            })
        }
    }).catch(err => {
        console.log("Error al buscar cancion")
        res.json(err)
    })
}


exports.postBorrarListaLibros = (req, res) => {
    ListaLibro.destroy({
        where: {
            id_lista: req.body.id_lista
        }
    }).then(lista => {
        console.log("Lista de libros borrada")
        res.json({ estado: "Se borraron exitosamente las listas", lista: lista })
    }).catch(err => {
        console.log("Error al borrar lista de libros")
        res.json(err)
    })
}