const express = require('express')

//Crear el objeto principal de la api 

const app = express()

//Url de prueba
app.get('/prueba' , function (request , response){
    response.send("Hola")
})

//Segunda ruta
app.get('/prueba2' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true
        })
})

//Crear el servidor de aplicación
app.listen( 5000 , 
          console.log( 'Servidor ejecutando en puerto' + 5000 ))