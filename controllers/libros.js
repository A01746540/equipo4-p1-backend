const path = require('path')
const Libro = require('../utils/database').models.libro

exports.getLibros = (req, res) => {
    Libro.findAll()
        .then(libros => res.send(libros))
        .catch(err => res.send(err))
}

exports.getLibro = (req, res) => {
    Libro.findOne({ where: { id: req.body.id } })
        .then(libro => {
            res.json(libro)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener libro" })
        })
}

exports.postAgregarLibro = (req, res) => {
    console.log(req.body)
    Libro.create(req.body)
        .then(con => {
            console.log("Libro agregado exitosamente")
            res.json({ estado: "Libro agregado exitosamente" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al agregar libro" })
        })
}

exports.postActualizarLibro = (req, res) => {
    Libro.update(req.body, { where: { id: req.body.id } })
        .then(libro => {
            console.log("Libro actualizado exitosamente")
            res.json({ estado: "Libro actualizado exitosamente" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al actualizar libro" })
        })
}

exports.postBorrarLibro = (req, res) => {
    Libro.destroy({
            where: {
                id: req.body.id
            }
        })
        .then(libro => {
            console.log("Libro eliminado exitosamente")
            res.json({ estado: "Libro eliminado exitosamente" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al eliminar libro" })
        })
}

exports.getLibroPorAutor = (req, res) => {
    Libro.findAll({
            where: {
                autor: req.body.autor
            }
        })
        .then(libros => {
            res.json(libros)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener libros por autor" })
        })
}