const { default: mongoose } = require("mongoose");
const empleado = require("../models/empleados");

function saveData(req,res){
    var myEmpleado = new empleado(req.body);
    myEmpleado.save((err,result)=>{
        res.status(200).send({message:result}); 
    });
}

function buscarData(req,res){
    var idEmpleado=req.params.id;
    empleado.findById(idEmpleado).exec((err,result)=>{
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
                res.status(200).send({result});
            }
        }
    });
}

function listarData(req,res){
 
    var result=empleado.find({}).sort('nombres');
    
    result.exec(function(err,result){
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
                res.status(200).send({result});
            }
        }
    });
}

function updateData(req,res){
    var id = mongoose.Types.ObjectId(req.query.id);
    empleado.findOneAndUpdate({_id:id}, req.body, {new:true}, function(err,empleado){
        if(err)
            res.send(err);
        else
        res.json(empleado);          
    });
}

function deleteData(req,res){
    var idEmpleado=req.params.id;
    empleado.findOneAndRemove(idEmpleado, function(err ,empleado){
        if(err){
            return res.json(500, {
                message: 'No hemos encontrado el empleado'
            });
        }
    return res.json(empleado);
    });
}

module.exports={
    saveData,
    buscarData,
    listarData,
    updateData,
    deleteData
}