const path = require('path');
const Cancion = require('../utils/database').models.cancion
const ListaReproduccion = require('../utils/database').models.lista_reproducion
const ListaCancion = require('../utils/database').models.lista_canciones

exports.postAgregarListaCanciones = (req, res) => {
    Cancion.findOne({
        where: { id: req.body.id_cancion }
    }).then(cancion => {
        if (cancion) {
            ListaReproduccion.findOne({
                where: { id: req.body.id_lista }
            }).then(listaR => {
                if (listaR) {
                    ListaCancion.create(req.body)
                        .then(lista => {
                            console.log("Lista de canciones creada")
                            res.json(lista)
                        })
                        .catch(err => {
                            console.log("Error al crear lista de canciones")
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

exports.getListasCanciones = (req, res) => {
    ListaCancion.findAll()
        .then(listas => {
            console.log("Lista de canciones obtenidas")
            res.json(listas)
        }).catch(err => {
            console.log("Error al obtener lista de canciones")
            res.json(err)
        })
}

// getCuandoListas
exports.getCuandoListas = (req, res) => {
    ListaCancion.findAll({
        where: {
            id_lista: req.body.id_lista
        }
    }).then(canciones => {
        console.log("Lista de canciones obtenidas")
        res.json(canciones)
    }).catch(err => {
        console.log("Error al obtener lista de canciones")
        res.json(err)
    })
}

// getCuandoCanciones
exports.getCuandoCanciones = (req, res) => {
    ListaCancion.findAll({
        where: {
            id_cancion: req.body.id_cancion
        }
    }).then(listas => {
        console.log("Lista de listas de reproducción obtenidas")
        res.json(listas)
    }).catch(err => {
        console.log("Error al obtener lista de listas de reproducción")
        res.json(err)
    })
}

exports.postActualizarListaCanciones = (req, res) => {
    Cancion.findOne({
        where: { id: req.body.id_cancion }
    }).then(cancion => {
        if (cancion) {
            ListaReproduccion.findOne({
                where: { id: req.body.id_lista }
            }).then(listaR => {
                if (listaR) {
                    ListaCancion.update(req.body, {
                        where: {
                            id: req.body.id
                        }
                    }).then(lista => {
                        console.log("Lista de canciones actualizada")
                        res.json({ estado: "Se modificaron exitosamente las listas", lista: lista })
                    }).catch(err => {
                        console.log("Error al actualizar lista de canciones")
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

exports.postBorrarListaCanciones = (req, res) => {
    ListaCancion.destroy({
        where: {
            id_lista: req.body.id_lista
        }
    }).then(lista => {
        console.log("Lista de canciones borrada")
        res.json({ estado: "Se eliminaron exitosamente las listas", lista: lista })
    }).catch(err => {
        console.log("Error al borrar lista de canciones")
        res.json(err)
    })
}