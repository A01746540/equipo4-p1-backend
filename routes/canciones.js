const express = require("express")
const cancionController = require('../controllers/canciones')
const router = express.Router()

router.post('/agregarCancion', cancionController.postAgregarCancion)
router.get('/obtenerCanciones', cancionController.getCanciones)
router.get('/obtenerCancion', cancionController.getCancion)
router.get('/obtenerCancionPorTitulo', cancionController.getCancionesPorTitulo)
router.get('/obtenerCancionPorArtista', cancionController.getCancionesPorArtista)
router.get('/obtenerCancionPorAlbum', cancionController.getCancionesPorAlbum)
router.get('/obtenerCancionPorGenero', cancionController.getCancionesPorGenero)
router.post('/actualizarCancion', cancionController.postActualizarCancion)
router.post('/eliminarCancion', cancionController.postEliminarCancion)

module.exports = router