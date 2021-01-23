const mongooose = require("mongoose");

const usuarioSchema = new mongooose.Schema({
    nombre:{
        type:String,
        required:[true,"este campo es obligatorio"],
        maxlength:[25,"este campo solo puede tener 25"],
        trim:true
    },
    email:{
        type:String,
        unique:[true,"este campo es unico"]
    },
    password:{
        type:String,
        required:[true,"este campo es obligatorio"],
        trim:true
    }
});

const Usuario =mongooose.model("Usuario", usuarioSchema);

module.exports=Usuario;