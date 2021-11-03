const path = require('path')
const Libro = require('../utils/database').models.libros

exports.getLibros = (req, res) => {
    Libro.findAll()
        .then(libros => res.send(libros))
        .catch(err => res.send(err))
}

exports.getLibro = (req, res) => {
    Libro.findById(req.params.id)
        .then(libro => res.send(libro))
        .catch(err => res.send(err))
}

exports.postAgregarLibro = (req, res) => {
    Libro.create(req.body)
        .then(libro => res.send(libro))
        .catch(err => res.send(err))
}

exports.postActualizarLibro = (req, res) => {
    Libro.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(libro => res.send(libro))
        .catch(err => res.send(err))
}

exports.postBorrarLibro = (req, res) => {
    Libro.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(libro => res.send(libro))
        .catch(err => res.send(err))
}

exports.getLibrosPorAutor = (req, res) => {
    Libro.findAll({
            where: {
                autor: req.params.autor
            }
        })
        .then(libros => res.send(libros))
        .catch(err => res.send(err))
}