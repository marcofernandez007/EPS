import React ,{Fragment, useState} from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import clienteAxios from '../../config/axios';



function NuevoCliente({history}){
    //cliente = state, guardarcliente = funcion para guardar cliente
    const[cliente, guardarCLiente]=useState({
        nombre:'',
        apellido:'',
        fecha_nacimiento:'',
        numero_cedula:'',
        email:'',
        telefono:'',
        tipo_ser:''
    });

    const actualizarState = e => {
        //almacenar en el state
        guardarCLiente({
            //copia del state actual
            ...cliente,
            [e.target.name] : e.target.value 
        });
        console.log(cliente)
    }

    //añade en la REST API un cliente nuevo
    const agregarCliente=e=>{
        e.preventDefault();
        //enviar peticion
        clienteAxios.post('/clientes',cliente)
            .then(res=>{
                console.log(res);
                Swal.fire(
                    'Se agrego el cliente!',
                    'click el boton!',
                    'success'
                  )
                //redireccionar
                history.push('/');
            });
        
    };

    //validar formulario
    const validarCliente=()=>{
        const {nombre,apellido, fecha_nacimiento,numero_cedula,email,telefono,tipo_ser}=cliente;
        //revisar que las propiedades del state tengan contenido
        let valido = !nombre.length || !apellido.length || !fecha_nacimiento.length || !numero_cedula.length || !email.length || !telefono.length;
        //retorna true o false
        return valido;
    }

    return(
        <Fragment>
            <h2>Nuevo Cliente</h2>

            <form
                onSubmit={agregarCliente}
            >
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Numero Cedula:</label>
                    <input type="number" 
                           placeholder="Numero Cedula" 
                           name="numero_cedula"
                           onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text" 
                           placeholder="Nombre Cliente" 
                           name="nombre" 
                           onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input type="text" 
                           placeholder="Apellido Cliente" 
                           name="apellido"
                           onChange={actualizarState}
                     />
                </div>
            
                <div className="campo">
                    <label>Tipo Ser:</label>
                    <select name="tipo_ser" onChange={actualizarState}>
                       <option value="Humano">Seleccione Uno</option> 
                        <option value="Humano">Humano</option> 
                        <option value="Dios" >DIos</option>
                    </select>
                   {/*  <input type="text"
                           placeholder="Tipo Ser" 
                           name="tipo_ser" 
                           onChange={actualizarState}
                    /> */}
                </div>

                <div className="campo">
                    <label>Fecha Nacimiento:</label>
                    <input type="date" 
                           placeholder="Fecha Nacimiento" 
                           name="fecha_nacimiento"
                           onChange={actualizarState}
                     />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input type="email" 
                           placeholder="Email Cliente" 
                           name="email" 
                           onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input type="number" 
                           placeholder="Teléfono Cliente" 
                           name="telefono" 
                           onChange={actualizarState}
                    />
                </div>

                <div cclassName="enviar">
                        <input type="submit" 
                               class="btn btn-azul" 
                               value="Agregar Cliente" 
                               disabled={validarCliente()}
                        />
                </div>

            </form>

        </Fragment>
        
    );
}
//HOC , funcion retomar componente
export default withRouter(NuevoCliente);