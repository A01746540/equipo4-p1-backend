const express = require("express")
const listaLibroController = require('../controllers/lista_libros')
const router = express.Router()

router.get('/obtenerListaLibro', listaLibroController.getListaLibros)
router.post('/agregarListaLibro', listaLibroController.postAgregarListaLibros)
router.post('/actualizarListaLibro', listaLibroController.postActualizarListaLibros)
router.post('/eliminarListaLibro', listaLibroController.postBorrarListaLibros)
router.get('/obtenerListaLibroPorLista', listaLibroController.getCuandoListas)
router.get('/obtenerListaLibroPorLibro', listaLibroController.getCuandoLibros)

module.exports = router