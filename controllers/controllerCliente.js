const { default: mongoose } = require("mongoose");
const cliente = require("../models/clientes");



function saveData(req,res){
    var myCliente = new cliente(req.body);
    myCliente.save((err,result)=>{
        res.status(200).send({message:result});
    });
}

function buscarData(req,res){
    var idCliente=req.params.id;
    cliente.findById(idCliente).exec((err,result)=>{
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
 
    var result=cliente.find({}).sort('nombre');
    
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
    cliente.findOneAndUpdate({_id:id}, req.body, {new:true}, function(err,cliente){
        if(err)
            res.send(err);
        else
        res.json(cliente);          
    });
}

function deleteData(req,res){
    var idCliente=req.params.id;
    cliente.findOneAndRemove(idCliente, function(err ,cliente){
        if(err){
            return res.json(500, {
                message: 'No hemos encontrado el cliente'
            });
        }
    return res.json(cliente);
    });
}

module.exports={
    saveData,
    buscarData,
    listarData,
    updateData,
    deleteData
}