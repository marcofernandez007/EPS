const Clientes=require('../models/Clientes');
//agrega nuevo clientes
exports.nuevoCliente=async (req,res,next)=>{

    const cliente= new Clientes(req.body);

    try{
        
       // console.log(req.body);
        console.log(cliente);
        await cliente.save();
        res.json({ mensaje : 'se agrego un nuevo cliente'});

    }catch(error){
        console.log(error);
        next();
    }
};
//mostrar todos los clientes
exports.mostrarClientes=async (req,res,next)=>{
    try{
        const clientes=await Clientes.find({});
        res.json(clientes);
    }catch(error){
        console.log(error);
        next();
    }
};
//mostrar un cliente por su ID
exports.mostrarCliente=async (req,res,next)=>{
    const cliente=await Clientes.findById(req.params.idCliente);

    if(!cliente){
        res.json({mensaje:'Este cliente no existe'});
        return next();
    }

    res.json(cliente);
};
//actualizar un cliente por su ID
exports.actualizarCliente=async (req,res,next)=>{
    try{
        const cliente=await Clientes.findOneAndUpdate({ _id : req.params.idCliente },
            req.body,{
                new:true
            });
        res.json(cliente);
    }catch(error){
        console.log(error);
        next();
    }
};
//eliminar cliente por el id
exports.eliminarCliente=async (req,res,next)=>{
    try{
        const clientes=await Clientes.findOneAndDelete({ _id:req.params.idCliente });
        res.json({mensaje:'el cliente fue eliminado'});
    }catch(error){
        console.log(error);
        next();
    }
};
