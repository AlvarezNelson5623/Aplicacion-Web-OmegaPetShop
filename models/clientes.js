var mongoose= require('mongoose');
const Schema = mongoose.Schema;
const clienteSchema=Schema({
    nombres:String,
    correo: String,
    dieccion: String,
    telefono: String
});

const cliente = mongoose.model('cliente',clienteSchema);
module.exports = cliente;