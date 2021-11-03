const path = require('path')
const ListaReproduccion = require('../utils/database').models.lista_reproducion

exports.postAgregarListaReproduccion = (req, res) => {
    ListaReproduccion.create({
        nombre: req.body.nombre,
        privada: req.body.privada,
        usuario_id: req.body.id
    }).then(lista => {
        res.send(lista)
    })
}

exports.getListasReproduccion = (req, res) => {
    ListaReproduccion.findAll({
        where: {
            usuario_id: req.body.id
        }
    }).then(listas => {
        res.send(listas)
    })
}

exports.getListaReproduccion = (req, res) => {
    ListaReproduccion.findOne({
        where: {
            id: req.body.id
        }
    }).then(lista => {
        res.send(lista)
    })
}

exports.getListasReproduccionUsuario = (req, res) => {
    ListaReproduccion.findAll({
        where: {
            usuario_id: req.body.id
        }
    }).then(listas => {
        res.send(listas)
    })
}

exports.postActualizarListaReproduccion = (req, res) => {
    ListaReproduccion.update({
        nombre: req.body.nombre,
        privada: req.body.privada
    }, {
        where: {
            id: req.body.id
        }
    }).then(lista => {
        res.send(lista)
    })
}

exports.postEliminarListaReproduccion = (req, res) => {
    ListaReproduccion.destroy({
        where: {
            id: req.body.id
        }
    }).then(lista => {
        res.send(lista)
    })
}