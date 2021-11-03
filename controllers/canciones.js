const path = require('path')
const Cancion = require('../utils/database').models.canciones

exports.postAgregarCancion = (req, res) => {
    console.log(req.body)
    Cancion.create(req.body)
        .then(con => {
            console.log("Canción agregada exitosamente")
            res.json({ estado: "Canción agregada exitosamente" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al agregar canción" })
        })
}

exports.getCanciones = (req, res) => {
    Cancion.findAll()
        .then(canciones => {
            res.json(canciones)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener canciones" })
        })
}

exports.getCancion = (req, res) => {
    Cancion.findOne({ where: { id: req.params.id } })
        .then(cancion => {
            res.json(cancion)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener canción" })
        })
}

exports.getCancionesPorTitulo = (req, res) => {
    Cancion.findAll({ where: { titulo: req.params.titulo } })
        .then(canciones => {
            res.json(canciones)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener canciones" })
        })
}

exports.getCancionesPorArtista = (req, res) => {
    Cancion.findAll({ where: { artista: req.params.artista } })
        .then(canciones => {
            res.json(canciones)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener canciones" })
        })
}

exports.getCancionesPorAlbum = (req, res) => {
    Cancion.findAll({ where: { album: req.params.album } })
        .then(canciones => {
            res.json(canciones)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener canciones" })
        })
}

exports.getCancionesPorGenero = (req, res) => {
    Cancion.findAll({ where: { genero: req.params.genero } })
        .then(canciones => {
            res.json(canciones)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener canciones" })
        })
}

exports.postActualizarCancion = (req, res) => {
    Cancion.update(req.body, { where: { id: req.params.id } })
        .then(con => {
            console.log("Canción actualizada exitosamente")
            res.json({ estado: "Canción actualizada exitosamente" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al actualizar canción" })
        })
}

exports.postEliminarCancion = (req, res) => {
    Cancion.destroy({ where: { id: req.params.id } })
        .then(con => {
            console.log("Canción eliminada exitosamente")
            res.json({ estado: "Canción eliminada exitosamente" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al eliminar canción" })
        })
}