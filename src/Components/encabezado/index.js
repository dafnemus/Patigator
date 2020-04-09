import React from 'react';

import { ReactComponent as Logo } from './img/patigator_logo.svg';
import 'antd/dist/antd.css';
import './Colors/style.css';
import './styles.css';

function Encabezado() {
  return (
    <header className="header">
      <Logo className="logo" />
      <h1>Patigator</h1>
    </header>
  );
}

export default Encabezado;
