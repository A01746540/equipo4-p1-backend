const express = require("express")
const listaReproduccionController = require('../controllers/lista_reproduccion')
const router = express.Router()

router.get('/obtenerListasReproduccion', listaReproduccionController.getListasReproduccion)
router.get('/obtenerListasReproduccion', listaReproduccionController.getListaReproduccion)
router.post('/agregarListasReproduccion', listaReproduccionController.postAgregarListaReproduccion)
router.post('/actualizarListasReproduccion', listaReproduccionController.postActualizarListaReproduccion)
router.post('/eliminarListasReproduccion', listaReproduccionController.postEliminarListaReproduccion)
router.get('/obtenerListasReproduccionPorUsuario', listaReproduccionController.getListasReproduccionUsuario)

module.exports = router