const express=require('express');
const router = express.Router();

const clienteController=require('../controllers/clienteController');
const medicosController=require('../controllers/medicosController');
const citasController=require('../controllers/citasController');
const usuariosController = require('../controllers/usuariosController');

// middle para proteger las rutas
const auth = require('../middleware/auth');

module.exports=function() {
    //agregar nuevos clientes via POST
    router.post('/clientes' , clienteController.nuevoCliente);
    //obtener todos los clientes
    router.get('/clientes' , clienteController.mostrarClientes);
    //muestra un cliente especifico
    router.get('/clientes/:idCliente' , clienteController.mostrarCliente);
    //actualizar cliente
    router.put('/clientes/:idCliente' , clienteController.actualizarCliente);
    //eliminar cliente
    router.delete('/clientes/:idCliente' , clienteController.eliminarCliente);
    
    /*Medicos*/
    //nuevo medico problemas al subir imagen
    router.post('/medicos',
      //medicosController.imagenMedico
      medicosController.nuevoMedico
      );
    //muestra todos los medicos
    router.get('/medicos', medicosController.mostrarMedicos);
    //muestra un medico por el id
    router.get('/medicos/:idMedico',medicosController.mostrarMedico);
    //actualizar medico
    router.put('/medicos/:idMedico' , medicosController.actualizarMedico);
    //eliminar medico
    router.delete('/medicos/:idMedico' , medicosController.eliminarMedico);

     /*citas*/
     //nueva cita
     router.post('/citas',citasController.nuevaCita);
     //mostar citas
     router.get('/citas',citasController.mostrarCitas);
     //mostrar una cita por id
     router.get('/citas/:idCita',citasController.mostrarCita);
     //actualizar cita
     router.put('/citas/:idCita',citasController.actualizarCita);
     //eliminar cita
     router.delete('/citas/:idCita',citasController.eliminarCita);

     //usuarios
     router.post('/crear-cuenta',auth, usuariosController.registrarUsuario);
    router.post('/iniciar-sesion',
        usuariosController.autenticarUsuario
    );

    return router;
}