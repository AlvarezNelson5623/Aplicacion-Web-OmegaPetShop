var mongoose= require('mongoose');
const Schema = mongoose.Schema;
const proveedorSchema=Schema({
    nombres:String,
    correo: String,
    dieccion: String,
    telefono: String
});

const proveedor = mongoose.model('proveedor',proveedorSchema);
module.exports = proveedor;