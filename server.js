const app= require ("./app");
const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=>{
    console.log("conexco¿ion exitosa a la base de datos");
}).catch(
    (err)=>
    {console.log(err)}
)

app.listen(3000,()=>{
    console.log(`aplicacion correindo por el puerto: 3000`)
})