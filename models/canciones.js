const Sequelize = require('sequelize');
const Cancion = (sequelize) => {
    sequelize.define('cancion', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // Maximo 50 caracteres
        titulo: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        duracion: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        album: {
            type: Sequelize.STRING,
            allowNull: false
        },
        artista: {
            type: Sequelize.STRING,
            allowNull: false
        },
        genero: {
            type: Sequelize.STRING,
            allowNull: false
        },
        anio: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        imagen: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}
module.exports = Cancion