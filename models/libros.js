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
        anio: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
}
module.exports = Libro