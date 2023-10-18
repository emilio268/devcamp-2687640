const express = require('express')


//rutas de bootcamps
const bootcampRoutes = require('./rutas/bootcamps')
const cursosRoutes = require('./rutas/courses')
const reviewsRoutes = require('./rutas/reviews')
const usersRoutes = require('./rutas/users')


//Crear el objeto principal de la api 

const app = express()


//vincular rutas al objeto app
app.use("/api/v1/devcamp/bootcamps", bootcampRoutes)

app.use("/api/v1/devcamp/cursos", cursosRoutes)

app.use("/api/v1/devcamp/reviews", reviewsRoutes)

app.use("/api/v1/devcamp/users", usersRoutes)


//Crear el servidor de aplicación
app.listen( 5000 , 
          console.log( 'Servidor ejecutando en puerto' + 5000 ))