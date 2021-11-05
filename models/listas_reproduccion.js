const Sequelize = require('sequelize');
const ListaReproduccion = (sequelize) => {
    sequelize.define('lista_reproducion', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tipo_elemento: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        usuario_name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}
module.exports = ListaReproduccion;