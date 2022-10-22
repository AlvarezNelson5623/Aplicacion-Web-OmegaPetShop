//const express = require('express');
var {Router}=require('express');
var router=Router();

// router.get('/',()=>{
//     console.log("Server Ready too");
// });



var controllerProducto=require('../controllers/controllerProdcuto');
// router.get('/Producto/prueba',controllerProducto.prueba);//--------------------------
router.post('/Producto/Agregar',controllerProducto.saveProducto);//OK
router.get('/Producto/Buscar/:id',controllerProducto.buscarData);//OK
router.get('/Producto/BuscarTodo',controllerProducto.listarData);//OK
router.delete('/Producto/Eliminar/:id',controllerProducto.deleteData);//OK
router.put('/Producto/Actualizar/:id',controllerProducto.updateData);
module.exports=router;