const express = require("express")
const listaCancionController = require('../controllers/lista_canciones')
const router = express.Router()

router.post('/agregarListaCancion', listaCancionController.postAgregarListaCanciones)
router.get('/obtenerListasCancion', listaCancionController.getListasCanciones)
router.get('/obtenerListaCancionPorLista', listaCancionController.getCuandoListas)
router.get('/obtenerListaCancionPorCancion', listaCancionController.getCuandoCanciones)
router.post('/actualizarListaCancion', listaCancionController.postActualizarListaCanciones)
router.post('/eliminarListaCancion', listaCancionController.postBorrarListaCanciones)

module.exports = router