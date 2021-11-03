const express = require('express')
const app = express();
const sequelize = require('./utils/database')
const cancionRoutes = require('./routes/canciones')
const libroRoutes = require('./routes/libros')
const listareproduccionRoutes = require('./routes/listas_reproduccion')
const listacancionRoutes = require('./routes/lista_canciones')
const listalibroRoutes = require('./routes/lista_libros')

app.use(express.json())
app.use('/canciones', cancionRoutes);
app.use('/libros', libroRoutes);
app.use('/listareproduccion', listareproduccionRoutes);
app.use('/listacanciones', listacancionRoutes);
app.use('/listalibros', listalibroRoutes);

sequelize.sync()
    .then(
        app.listen(8084, () => {
            console.log("Servidor online en el puerto 8084")
        })
    )
    .catch(err => console.log(err))