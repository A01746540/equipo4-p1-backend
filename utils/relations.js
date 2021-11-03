function aplicarRelaciones(sequelize) {
    //Imprimir los modelos relacionados con el objeto de conexión
    console.log(sequelize.models)
    const Cancion = sequelize.models.cancion
    const Libro = sequelize.models.libro
    const ListaReproduccion = sequelize.models.lista_reproduccion
    const ListaCancion = sequelize.models.lista_canciones
    const ListaLibro = sequelize.models.lista_libros

    //Un videojuego puedes jugarse en muchas consolas
    Cancion.associate = function(models) {
        Cancion.belongsToMany(ListaReproduccion, { through: ListaCancion });
    };
    Libro.associate = function(models) {
        Libro.belongsToMany(ListaReproduccion, { through: ListaLibro });
    };
    // ListaReproduccion.belongsToMany(Cancion, { through: ListaCancion });
    // //Una consola tiene muchos videojuegos
    // ListaReproduccion.belongsToMany(Libro, { through: ListaLibro });
    // Libro.belongsToMany(ListaReproduccion, { through: ListaLibro });
    //Si tuvieran una relación uno a muchos
    /*Supuesto tene una tabla trofeo  un videojuego 
    puede tener muchos trofeos pero un trofeo solo pertenece a un videojuego    
    */
    //Videojuego.hasMany(Trofeo)
    //Trofeo.belongsTo(Videojuego)

}

module.exports = { aplicarRelaciones }