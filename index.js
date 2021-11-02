const express = require('express')
const app = express();
const sequelize = require('./utils/database')
    // const ciudadesRoutes = require('./routes/ciudades')

app.use(express.json())
    // app.use('/ciudades', ciudadesRoutes);

sequelize.sync()
    .then(
        app.listen(8084, () => {
            console.log("Servidor online en el puerto 8084")
        })
    )
    .catch(err => console.log(err))