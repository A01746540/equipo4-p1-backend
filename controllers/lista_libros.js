const path = require('path')
const ListaLibro = require('../utils/database').models.lista_libros

exports.postAgregarListaLibros = (req, res) => {
    ListaLibro.create({
        nombre: req.body.nombre,
        id_usuario: req.user.id
    }).then(lista => {
        res.json(lista)
    })
}

exports.getListaLibros = (req, res) => {
    ListaLibro.findAll({
        where: {
            id_usuario: req.user.id
        }
    }).then(listas => {
        res.json(listas)
    })
}

// getCuandoListas
exports.getCuandoListas = (req, res) => {
    ListaLibro.findAll({
        where: {
            id_lista: req.params.id_lista
        }
    }).then(canciones => {
        res.json(canciones)
    })
}

// getCuandoLibros
exports.getCuandoLibros = (req, res) => {
    ListaLibro.findAll({
        where: {
            id_cancion: req.params.id_cancion
        }
    }).then(listas => {
        res.json(listas)
    })
}

exports.postActualizarListaLibros = (req, res) => {
    ListaLibro.update({
        nombre: req.body.nombre
    }, {
        where: {
            id: req.params.id
        }
    }).then(lista => {
        res.json(lista)
    })
}

exports.postBorrarListaLibros = (req, res) => {
    ListaLibro.destroy({
        where: {
            id: req.params.id
        }
    }).then(lista => {
        res.json(lista)
    })
}