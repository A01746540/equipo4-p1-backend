const express = require("express")
const listaLibroController = require('../controllers/lista_libros')
const router = express.Router()

router.post('/agregarListaLibro', listaLibroController.postAgregarListaLibros)
router.get('/obtenerListasLibro', listaLibroController.getListasLibros)
router.get('/obtenerListaLibroPorLista', listaLibroController.getCuandoListas)
router.get('/obtenerListaLibroPorLibro', listaLibroController.getCuandoLibros)
router.post('/actualizarListaLibro', listaLibroController.postActualizarListaLibros)
router.post('/eliminarListaLibro', listaLibroController.postBorrarListaLibros)

module.exports = router