const express= require ('express');

const app = express();

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}))

app.use(bodyparser.json())



const usuarioRoutes = require('./routes/index');

app.use(usuarioRoutes)


module.exports=app
