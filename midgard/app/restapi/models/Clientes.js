const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const clientesSchema= new Schema({
    nombre:{
        type:String,
        trim: true
    },
    apellido:{
        type:String,
        trim:true
    },
    fecha_nacimiento:{
        type:Date
    },
    tipo_identificacion:{
        type:String
    },
    numero_cedula:{
        type:Number
    },
    direccion:{
        type:String,
        lowercase:true,
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true
    },
    telefono:{
        type:String,
        trim:true
    },
    tipo_ser:{
        type:String,
        trim:true
    }
});

module.exports=mongoose.model('Clientes',clientesSchema);