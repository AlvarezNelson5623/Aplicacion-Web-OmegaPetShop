const express = require('express');
// var {Router}=require('express');
// var router=Router();

var router = express.Router();


// router.get('/',()=>{
//     console.log("Server Ready too");
// });


//productos
var controllerProducto=require('../controllers/controllerProdcuto');
router.post('/Producto/Agregar',controllerProducto.saveProducto);//OK
router.get('/Producto/Buscar/:id',controllerProducto.buscarData);//OK
router.get('/Producto/BuscarTodo',controllerProducto.listarData);//OK
router.delete('/Producto/Eliminar/:id',controllerProducto.deleteData);//OK
router.put('/Producto/Actualizar/:id',controllerProducto.updateData);

// clientes
var controllerCliente= require('../controllers/controllerCliente');
router.post('/Cliente/Agregar',controllerCliente.saveData);//OK
router.get('/Cliente/Buscar/:id',controllerCliente.buscarData);//OK
router.get('/Cliente/BuscarTodo',controllerCliente.listarData);//OK
router.delete('/Cliente/Eliminar/:id',controllerCliente.deleteData);//OK
router.put('/Cliente/Actualizar/:id',controllerCliente.updateData);

//proveedores
var controllerProveedor = require('../controllers/controllerProveedor');
router.post('/Proveedor/Agregar',controllerProveedor.saveData);//OK
router.get('/Proveedor/Buscar/:id',controllerProveedor.buscarData);//OK
router.get('/Proveedor/BuscarTodo',controllerProveedor.listarData);//OK
router.delete('/Proveedor/Eliminar/:id',controllerProveedor.deleteData);//OK
router.put('/Proveedor/Actualizar/:id',controllerProveedor.updateData);

//empleados
var controllerEmpleado = require('../controllers/controllerEmpleado');
router.post('/Empleado/Agregar',controllerEmpleado.saveData);//OK
router.get('/Empleado/Buscar/:id',controllerEmpleado.buscarData);//OK
router.get('/Empleado/BuscarTodo',controllerEmpleado.listarData);//OK
router.delete('/Empleado/Eliminar/:id',controllerEmpleado.deleteData);//OK
router.put('/Empleado/Actualizar/:id',controllerEmpleado.updateData);

//exports
module.exports=router;