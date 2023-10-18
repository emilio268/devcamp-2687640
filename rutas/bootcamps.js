const express= require('express')
const router = express.Router()


// endpoints: uri de bootcamps
// 
//obtener todos los bootcamps 
router.get('/' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí van a mostrarse los bootcamps"
        })
})

//Obtener bootcamps por id

router.get('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `Obteniendo bootcamp con id ${request.params.id}`
        })
})

//crear bootcamps
router.post('/' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí se van a crear bootcamps"
        })
})

//actualizar el bootcamp por id
router.put('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `actualizando bootcamp con id ${request.params.id}`
        })
})


//eliminar el bootcamp por id
router.delete('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `eliminando bootcamp con id ${request.params.id}`
        })
})


//exportar(commonjs) router
module.exports = router