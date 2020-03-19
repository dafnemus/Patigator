import React from 'react';
import 'antd/dist/antd.css';
import ButtonSize from './upload'
import Buscar from './search'
import Encabezado from "./encabezado";
import './App.css';

function App() {
  return (
    <div>
      <Encabezado/>;
      <Buscar/>;
      <ButtonSize/>;
    </div >
  );
}

export default App;
