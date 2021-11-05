const express = require("express")
const listaReproduccionController = require('../controllers/listas_reproduccion')
const router = express.Router()

router.post('/agregarListasReproduccion', listaReproduccionController.postAgregarListaReproduccion)
router.get('/obtenerListasReproduccion', listaReproduccionController.getListasReproduccion)
router.get('/obtenerListaReproduccion', listaReproduccionController.getListaReproduccion)
router.get('/obtenerListasReproduccionPorUsuario', listaReproduccionController.getListasReproduccionUsuario)
router.post('/actualizarListasReproduccion', listaReproduccionController.postActualizarListaReproduccion)
router.post('/eliminarListasReproduccion', listaReproduccionController.postEliminarListaReproduccion)

module.exports = router