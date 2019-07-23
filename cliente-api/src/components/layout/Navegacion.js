import React, { useContext } from 'react';

import { Link } from 'react-router-dom'
import { CRMContext } from '../../context/CRMContext';

const Navegacion = () => {

    const [auth, guardarAuth] = useContext(CRMContext);

    if(!auth.auth) return null;

    return ( 
        <aside className="sidebar col-3">
            <h2>Administración</h2>

            <nav class="navegacion">
            <Link to={"/"} className="clientes">Clientes</Link>
            <Link to={"/medicos"} className="productos">Medicos</Link>
            <Link to={"/citas"} className="pedidos">Citas</Link>
            </nav>
        </aside>
     );
}
 
export default Navegacion;