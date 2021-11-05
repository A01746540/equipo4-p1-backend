const path = require('path')
const Cancion = require('../utils/database').models.cancion

exports.postAgregarCancion = (req, res) => {
    Cancion.findOne({ where: { titulo: req.body.titulo } }).then(cancion => {
        if (cancion) {
            res.status(400).send({ error: 'Ya existe una canción con ese nombre' })
        } else {
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
    Cancion.findOne({ where: { id: req.body.id } })
        .then(cancion => {
            res.json(cancion)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener canción" })
        })
}

exports.getCancionesPorTitulo = (req, res) => {
    Cancion.findAll({ where: { titulo: req.body.titulo } })
        .then(canciones => {
            res.json(canciones)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener canciones" })
        })
}

exports.getCancionesPorArtista = (req, res) => {
    Cancion.findAll({ where: { artista: req.body.artista } })
        .then(canciones => {
            res.json(canciones)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener canciones" })
        })
}

exports.getCancionesPorAlbum = (req, res) => {
    Cancion.findAll({ where: { album: req.body.album } })
        .then(canciones => {
            res.json(canciones)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener canciones" })
        })
}

exports.getCancionesPorGenero = (req, res) => {
    Cancion.findAll({ where: { genero: req.body.genero } })
        .then(canciones => {
            res.json(canciones)
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener canciones" })
        })
}

exports.postActualizarCancion = (req, res) => {
    Cancion.update(req.body, { where: { id: req.body.id } })
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
    Cancion.destroy({ where: { id: req.body.id } })
        .then(con => {
            console.log("Canción eliminada exitosamente")
            res.json({ estado: "Canción eliminada exitosamente" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "Error al eliminar canción" })
        })
}