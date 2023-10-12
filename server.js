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


//Rutas de recurso bootcamps


//obtener todos los bootcamps 
app.get('/api/v1/devcamp/bootcamps' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí van a mostrarse los bootcamps"
        })
})

//obtener el bootcamp por id
app.get('/api/v1/devcamp/bootcamps/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `Obteniendo bootcamp con id ${request.params.id}`
        })
})

//crear bootcamps

app.post('/api/v1/devcamp/bootcamps' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí se van a crear bootcamps"
        })
})

//actualizar el bootcamp por id
app.put('/api/v1/devcamp/bootcamps/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `actualizando bootcamp con id ${request.params.id}`
        })
})


//eliminar el bootcamp por id
app.delete('/api/v1/devcamp/bootcamps/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `eliminando bootcamp con id ${request.params.id}`
        })
})

//Cursos
//###################################################################################


//obtener todos los cursos 
app.get('/api/v1/devcamp/cursos' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí van a mostrarse los cursos"
        })
})

//obtener el cursos por id
app.get('/api/v1/devcamp/cursos/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `Obteniendo cursos con id ${request.params.id}`
        })
})

//crear cursos

app.post('/api/v1/devcamp/cursos' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí se van a crear cursos"
        })
})

//actualizar el cursos por id
app.put('/api/v1/devcamp/cursos/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `actualizando cursos con id ${request.params.id}`
        })
})


//eliminar el cursos por id
app.delete('/api/v1/devcamp/cursos/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `eliminando cursos con id ${request.params.id}`
        })
})



//user 
//###################################################################################


//obtener todos los users 
app.get('/api/v1/devcamp/users' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí van a mostrarse los users"
        })
})

//obtener el users por id
app.get('/api/v1/devcamp/users/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `Obteniendo users con id ${request.params.id}`
        })
})

//crear cursos

app.post('/api/v1/devcamp/users' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí se van a crear users"
        })
})

//actualizar el users por id
app.put('/api/v1/devcamp/users/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `actualizando users con id ${request.params.id}`
        })
})


//eliminar el users por id
app.delete('/api/v1/devcamp/users/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `eliminando users con id ${request.params.id}`
        })
})


//reviews 
//###################################################################################


//obtener todos los reviews 
app.get('/api/v1/devcamp/reviews' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí van a mostrarse los reviews"
        })
})

//obtener el reviews por id
app.get('/api/v1/devcamp/reviews/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `Obteniendo reviews con id ${request.params.id}`
        })
})

//crear reviews

app.post('/api/v1/devcamp/reviews' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí se van a crear reviews"
        })
})

//actualizar el reviews por id
app.put('/api/v1/devcamp/reviews/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `actualizando reviews con id ${request.params.id}`
        })
})


//eliminar el reviews por id
app.delete('/api/v1/devcamp/reviews/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `eliminando reviews con id ${request.params.id}`
        })
})












//Crear el servidor de aplicación
app.listen( 5000 , 
          console.log( 'Servidor ejecutando en puerto' + 5000 ))