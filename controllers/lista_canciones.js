const path = require('path')
const ListaCancion = require('../utils/database').models.lista_canciones

exports.postAgregarListaCanciones = (req, res) => {
    ListaCancion.create({
        nombre: req.body.nombre,
        id_usuario: req.body.id
    }).then(lista => {
        res.json(lista)
    })
}

exports.getListaCanciones = (req, res) => {
    ListaCancion.findAll({
        where: {
            id_usuario: req.body.id
        }
    }).then(listas => {
        res.json(listas)
    })
}

// getCuandoListas
exports.getCuandoListas = (req, res) => {
    ListaCancion.findAll({
        where: {
            id_lista: req.body.id_lista
        }
    }).then(canciones => {
        res.json(canciones)
    })
}

// getCuandoCanciones
exports.getCuandoCanciones = (req, res) => {
    ListaCancion.findAll({
        where: {
            id_cancion: req.body.id_cancion
        }
    }).then(listas => {
        res.json(listas)
    })
}

exports.postActualizarListaCanciones = (req, res) => {
    ListaCancion.update({
        nombre: req.body.nombre
    }, {
        where: {
            id: req.body.id
        }
    }).then(lista => {
        res.json(lista)
    })
}

exports.postBorrarListaCanciones = (req, res) => {
    ListaCancion.destroy({
        where: {
            id: req.body.id
        }
    }).then(lista => {
        res.json(lista)
    })
}