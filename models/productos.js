var mongoose= require('mongoose');
const Schema = mongoose.Schema;
const productoSchema=Schema({
    nombre:String,
    valor_venta: Number,
    valor_compra: Number
});

const producto = mongoose.model('producto',productoSchema);
module.exports = producto;