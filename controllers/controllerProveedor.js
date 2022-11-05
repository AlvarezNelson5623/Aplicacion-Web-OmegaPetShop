const { default: mongoose } = require("mongoose");
const proveedor = require("../models/proveedores");


function saveData(req,res){
    var myProveedor = new proveedor(req.body);
    myProveedor.save((err,result)=>{
        res.status(200).send({message:result});
    });
}

function buscarData(req,res){
    var idProveedor=req.params.id;
    proveedor.findById(idProveedor).exec((err,result)=>{
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
 
    var result=proveedor.find({}).sort('nombres');
    
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
    proveedor.findOneAndUpdate({_id:id}, req.body, {new:true}, function(err,proveedor){
        if(err)
            res.send(err);
        else
        res.json(proveedor);          
    });
}

function deleteData(req,res){
    var idProveedor=req.params.id;
    proveedor.findOneAndRemove(idProveedor, function(err ,proveedor){
        if(err){
            return res.json(500, {
                message: 'No hemos encontrado el proveedor'
            });
        }
    return res.json(proveedor);
    });
}

module.exports={
    saveData,
    buscarData,
    listarData,
    updateData,
    deleteData
}