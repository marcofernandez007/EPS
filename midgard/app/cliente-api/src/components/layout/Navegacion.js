import React, {
    useContext
} from 'react';

import {
    Link
} from 'react-router-dom'
import {
    CRMContext
} from '../../context/CRMContext';

const Navegacion = () => {

    const [auth, guardarAuth] = useContext(CRMContext);

    if (!auth.auth) return null;

    return ( <
        aside className = "sidebar col-3" >
        <
        h2 > Administración < /h2>

        <
        nav class = "navegacion" >
        <
        Link to = {
            "/"
        }
        className = "clientes" > Clientes < /Link>

        <
        a href = "http://192.168.0.15:3000/"
        className = "pedidos"
        target = 'blank' > Generar Cita < /a>  <
        a href = "http://192.168.0.15:1234/"
        className = "pedidos"
        target = 'blank' > Busqueda Citas < /a>                 <
        a href = "http://127.0.0.1/midgard/certificado/index1.html"
        className = "pedidos"
        target = 'blank' > Cerificado Afiliaciòn < /a>  <
        a href = "http://localhost:333/"
        className = "pedidos"
        target = 'blank' > Entrega Medicamentos < /a> 

        <
        /nav> < /
        aside >
    );
}

export default Navegacion;