const Sequelize = require('sequelize');
const ListaReproduccion = (sequelize) => {
    sequelize.define('lista_reproduccion', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        tipo_elemento: {
            type: Sequelize.BINARY //1: cancion, 2: libro
        },
        fecha_creacion: {
            type: Sequelize.DATE
        },
        fecha_modificacion: {
            type: Sequelize.DATE
        },
        usuario_id: {
            type: Sequelize.INTEGER
        }
    })
}
module.exports = ListaReproduccion