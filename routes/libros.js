const express = require("express")
const libroController = require('../controllers/libros')
const router = express.Router()

router.get('/obtenerLibros', libroController.getLibros)
router.get('/obtenerLibro', libroController.getLibro)
router.post('/agregarLibro', libroController.postAgregarLibro)
router.post('/actualizarLibro', libroController.postActualizarLibro)
router.post('/eliminarLibro', libroController.postBorrarLibro)
router.get('/obtenerLibroPorAutor', libroController.getLibrosPorAutor)

module.exports = router