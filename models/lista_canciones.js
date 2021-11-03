const Sequelize = require('sequelize');
const ListaCancion = (sequelize) => {
    sequelize.define('lista_canciones', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_lista: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id_cancion: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
}
module.exports = ListaCancion;