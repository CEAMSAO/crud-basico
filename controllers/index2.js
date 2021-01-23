const Usuario = require("../models/usuario");


exports.home= async(req,res)=>{
    const usuario = await Usuario.find();
    if(!usuario){
    return res.send({
        status:200,
    mensaje:"exito"
    })
}
}
exports.ceam= async(req,res)=>{
try{
     const usuario = await Usuario.create(req.body);
     if(!usuario){
        return res.send({
            status:"error",
            mensaje:"algo salio mal"
        })
     }
     return res.status(201).send({
         status:"success",
         mensaje:"exito",
         
     })
}catch(
    error
){
    console.log(error);
    return res.send({
        status:"error",
        mensaje:"algo salio mal"
    })
}
    
}
exports.busqueda= (req,res)=>{
    res.send({
        status:200,
    mensaje:"buscando ruta"
    })
}
exports.error= (req,res)=>{
    res.send({
        status:200,
    mensaje:"error de ruta"
    })
}