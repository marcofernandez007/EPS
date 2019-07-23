const Citas = require('../models/Citas');
//nueva cita
exports.nuevaCita=async (req,res,next)=>{
    const cita=new Citas(req.body);
    try {
        await cita.save();
        res.json({mensaje:'se agrego una nueva cita'});
    } catch (error) {
        console.log(error);
        next();
    }
}
//muestra todas las citas
exports.mostrarCitas=async (req,res,next)=>{
    try {
        const citas=await Citas.find({}).populate('cliente').populate('medico');
        res.json(citas);
    } catch (error) {
        console.log(error);
        next();
    }
}
//muestra un pedido por id
exports.mostrarCita = async (req,res,next)=>{
    const cita= await Citas.findById(req.params.idCita).populate('cliente').populate('medico');

    if(!cita){
        res.json({mensaje:'Este cita no existe'});
        return next();
    }
    //muestra el pedido
    res.json(cita);
}
//actualizar cita por id
exports.actualizarCita=async (req,res,next)=>{
    try {
        const cita=await Citas.findOneAndUpdate({ _id : req.params.idCita },
            req.body,{
                new:true
            }).populate('cliente').populate('medico');
        res.json(cita);
    } catch (error) {
        console.log(error);
        next();
    }

}
//eliminar cita por el id
exports.eliminarCita=async (req,res,next)=>{
    try{
        const cita=await Citas.findOneAndDelete({ _id : req.params.idCita });
        res.json({mensaje:'esta cita fue eliminado'});
    }catch(error){
        console.log(error);
        next();
    }
};