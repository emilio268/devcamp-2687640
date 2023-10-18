const express= require('express')
const router = express.Router()



//user 
//###################################################################################


//obtener todos los users 
app.get('/' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí van a mostrarse los users"
        })
})

//obtener el users por id
app.get('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `Obteniendo users con id ${request.params.id}`
        })
})

//crear cursos

app.post('/' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí se van a crear users"
        })
})

//actualizar el users por id
app.put('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `actualizando users con id ${request.params.id}`
        })
})


//eliminar el users por id
app.delete('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `eliminando users con id ${request.params.id}`
        })
})



//exportar(commonjs) router
module.exports = router