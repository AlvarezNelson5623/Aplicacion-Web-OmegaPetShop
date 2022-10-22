const { default: mongoose } = require("mongoose");
const producto = require("../models/productos");

function prueba(req,res){
    res.status(200).send({
        nombre: 'probando una accion',
        valor_venta: 2000,
        valor_compra:500
    });
}


function saveProducto(req,res){
    var myProducto = new producto(req.body);
    myProducto.save((err,result)=>{
        res.status(200).send({message:result});
    });
}

function buscarData(req,res){
    var idProducto=req.params.id;
    producto.findById(idProducto).exec((err,result)=>{
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
    // var idProducto=req.paramas.idb; // duada con este   idb
    // if(!idProducto){
    var result=producto.find({}).sort('nombre');
    // }else{
    //     var result=producto.find({_id:idProducto}).sort('nombre');
    // }
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
    var id = mongoose.Types.ObjectId(req.query.productId);
    producto.findOneAndUpdate({_id:id}, req.body, {new:true}, function(err,producto){
        if(err)
            res.send(err);
        else
        res.json(producto);          
    });
}

function deleteData(req,res){
    var idProducto=req.params.id;
    producto.findOneAndRemove(idProducto, function(err ,producto){
        if(err){
            return res.json(500, {
                message: 'No hemos encontrado el producto'
            });
        }
    return res.json(producto);
    });
}

module.exports={
    prueba,
    saveProducto,
    buscarData,
    listarData,
    updateData,
    deleteData
}