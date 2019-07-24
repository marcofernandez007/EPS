const Medicos = require('../models/Medicos');
const multer=require('multer');
const shortid=require('shortid');

const configuracionMulter={
    storage : fileStorage=multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,__dirname+'../../uploads/');
        },
        filename: (req,file,cb)=>{
            const extension = file.mimetype.split('/')[1];
            cb(null,`${shortid.generate()}.${extension}`)
        }
    }),
    fileFilter(req,file,cb){
        if(file.mimetype==='image/jpeg' || file.mimetype==='image/png' ){
            cb(null,true);
        }else{
            cb(new Error('Formato no valido'));
        }
    }
}

const upload = multer(configuracionMulter).single('imagen');

//subir imagen
exports.imagenMedico=async (req,res,next)=>{
    upload(req,res,function(error){
        if(error){
            res.json({mensaje:error});
            return next();
        }
    });
    return next();
}
//agrega nuevo medico
exports.nuevoMedico=async (req,res,next)=>{

    const medico=new Medicos(req.body);

    try {
        /* if(req.file.filename){
            medico.imagen=req.file.filename;
            console.log(medico.imagen);
        } */
        await medico.save();
        console.log(medico);
        res.json({mensaje:'Se ha creado un nuevo medico'});
    } catch (error) {
        console.log(error);
        next();
    }
}
//mostar medicos
exports.mostrarMedicos=async (req,res,next)=>{
    try {
        const medicos= await Medicos.find({});
        res.json(medicos);
    } catch (error) {
        console.log(error);
        next();
    }
}
//mostrar un medico por su ID
exports.mostrarMedico=async (req,res,next)=>{
    const medico=await Medicos.findById(req.params.idMedico);

    if(!medico){
        res.json({mensaje:'Este cliente no existe'});
        return next();
    }

    res.json(medico);
};
//actualizar un medico por su ID
exports.actualizarMedico=async (req,res,next)=>{
    try{
        const medico=await Medicos.findOneAndUpdate({ _id : req.params.idMedico },
            req.body,{
                new:true
            });
        res.json(medico);
    }catch(error){
        console.log(error);
        next();
    }
};
//eliminar cliente por el id
exports.eliminarMedico=async (req,res,next)=>{
    try{
        const medico=await Medicos.findOneAndDelete({ _id:req.params.idMedico });
        res.json({mensaje:'el cliente fue eliminado'});
    }catch(error){
        console.log(error);
        next();
    }
};
