const express = require("express")
const listaCancionController = require('../controllers/lista_canciones')
const router = express.Router()

router.get('/obtenerListaCancion', listaCancionController.getListaCanciones)
router.post('/agregarListaCancion', listaCancionController.postAgregarListaCanciones)
router.post('/actualizarListaCancion', listaCancionController.postActualizarListaCanciones)
router.post('/eliminarListaCancion', listaCancionController.postBorrarListaCanciones)
router.get('/obtenerListaCancionPorLista', listaCancionController.getCuandoListas)
router.get('/obtenerListaCancionPorCancion', listaCancionController.getCuandoCanciones)

module.exports = router