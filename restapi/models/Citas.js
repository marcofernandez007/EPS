const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citasSchema = new Schema({
    cliente:{
        type:Schema.ObjectId,
        ref:'Clientes'
    },
    medico:{
        type:Schema.ObjectId,
        ref:'Medicos'
    },
    fecha_cita:{
        type:Date
    },hora:{
        type:String
    }

})

module.exports = mongoose.model('Citas', citasSchema);