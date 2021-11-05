const path = require('path')
const Libro = require('../utils/database').models.libro

exports.postAgregarLibro = (req, res) => {
    Libro.findOne({ where: { titulo: req.body.titulo } })
        .then(libro => {
            if (libro) {
                console.log("Libro ya existe")
                res.json({ estado: "Libro ya existe" })
            } else {
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
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener libro" })
        })
}

exports.getLibros = (req, res) => {
    Libro.findAll()
        .then(libros => {
            console.log("Libros obtenidos exitosamente")
            res.json(libros)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener libros" })
        })
}

exports.getLibro = (req, res) => {
    Libro.findOne({ where: { id: req.body.id } })
        .then(libro => {
            console.log("Libro obtenido exitosamente")
            res.json(libro)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener libro" })
        })
}

exports.getLibroPorAutor = (req, res) => {
    Libro.findAll({
            where: {
                autor: req.body.autor
            }
        })
        .then(libros => {
            console.log("Libros obtenidos exitosamente")
            res.json(libros)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener libros por autor" })
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