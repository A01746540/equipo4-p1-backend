const express = require("express")
const libroController = require('../controllers/libros')
const router = express.Router()

router.post('/agregarLibro', libroController.postAgregarLibro)
router.get('/obtenerLibros', libroController.getLibros)
router.get('/obtenerLibro', libroController.getLibro)
router.get('/obtenerLibroPorAutor', libroController.getLibroPorAutor)
router.post('/actualizarLibro', libroController.postActualizarLibro)
router.post('/eliminarLibro', libroController.postBorrarLibro)

module.exports = router