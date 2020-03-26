import React from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import { ReactComponent as Logo } from './img/patigator_logo.svg'

function Encabezado() {
    return (
        <header>
            <Logo id="logo"/>
            <h1>Patigator</h1>   
        </header>
    );
}
export default Encabezado;