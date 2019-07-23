const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const medicosSchema= new Schema({
    nombre:{
        type:String,
        trim:true
    },
    apellido:{
        type:String,
        trim:true
    },
    tipo_identificacion:{
        type:String
    },
    numero_identificacion:{
        type:Number
    },
    especialidad:{
        type:String
    },
    email:{
        type:String,
        trim:true
    },
    imagen:{
        type:String
    },
    telefono:{
        type:Number
    }
}
);

module.exports = mongoose.model('Medicos',medicosSchema);