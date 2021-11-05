const path = require('path')
const ListaReproduccion = require('../utils/database').models.lista_reproducion

exports.postAgregarListaReproduccion = (req, res) => {
    ListaReproduccion.findOne({
        where: {
            nombre: req.body.nombre
        }
    }).then(listaT => {
        if (listaT) {
            res.status(400).send({
                error: 'Ya existe una lista con ese nombre'
            })
        } else {
            ListaReproduccion.create(req.body)
                .then(lista => {
                    console.log("Lista agregada exitosamente")
                    res.json({ estado: "Lista agregada exitosamente" })
                }).catch(err => {
                    console.log(err)
                    res.json({ estado: "Error al agregar lista de reproduccion" })
                })
        }
    })
}


exports.getListasReproduccion = (req, res) => {
    ListaReproduccion.findAll()
        .then(listas => {
            console.log("Listas obtenidas exitosamente")
            res.json({ estado: "Listas obtenidas exitosamente", listas: listas })
        }).catch(err => {
            console.log(err)
            res.json({ estado: "Error al obtener listas" })
        })
}

exports.getListaReproduccion = (req, res) => {
    ListaReproduccion.findOne({
        where: {
            nombre: req.body.nombre
        }
    }).then(lista => {
        console.log("Lista obtenida exitosamente")
        res.json({ estado: "Lista obtenida exitosamente", lista: lista })
    }).catch(err => {
        console.log(err)
        res.json({ estado: "Error al obtener lista" })
    })
}

exports.getListasReproduccionUsuario = (req, res) => {
    ListaReproduccion.findAll({
        where: {
            usuario_name: req.body.usuario_name
        }
    }).then(listas => {
        console.log("Listas obtenidas exitosamente")
        res.json({ estado: "Listas obtenidas exitosamente", listas: listas })
    }).catch(err => {
        console.log(err)
        res.json({ estado: "Error al obtener listas" })
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
        console.log("Lista actualizada exitosamente")
        res.json({ estado: "Lista actualizada exitosamente" })
    }).catch(err => {
        console.log(err)
        res.json({ estado: "Error al actualizar lista" })
    })
}

exports.postEliminarListaReproduccion = (req, res) => {
    ListaReproduccion.destroy({
        where: {
            id: req.body.id
        }
    }).then(lista => {
        console.log("Lista eliminada exitosamente")
        res.json({ estado: "Lista eliminada exitosamente" })
    }).catch(err => {
        console.log(err)
        res.json({ estado: "Error al eliminar lista" })
    })
}