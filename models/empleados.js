var mongoose= require('mongoose');
const Schema = mongoose.Schema;
const empleadoSchema=Schema({
    nombres:String,
    correo: String,
    horaio_trabajo: String,
    sueldo:String,
    dieccion: String,
    telefono: String
});

const empleado = mongoose.model('empleado',empleadoSchema);
module.exports = empleado;