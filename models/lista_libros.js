const Sequelize = require('sequelize');
const ListaLibro = (sequelize) => {
    sequelize.define('lista_libros', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_lista: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id_libro: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
}
module.exports = ListaLibro;