const Sequelize = require('sequelize');
const Libro = (sequelize) => {
    sequelize.define('libro', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        autor: {
            type: Sequelize.STRING,
            allowNull: false
        },
        editorial: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fecha_publicacion: {
            type: Sequelize.DATE,
            allowNull: false
        },
        cantidad: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        precio: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    })
}
module.exports = Libro