const mongoose = require('mongoose');
mongoose
    .connect("mongodb://localhost:27017/omega_pet_shop",{
        useNewUrlParser:true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        //useFindAndModify: false,  //segun foro, esto ya está predefinido
    },(err,res)=>{
        if(err){
            throw err;
        }else{
            console.log('La conexion a la base de datos fue correcta...');
        }
    });

    module.exports=mongoose;