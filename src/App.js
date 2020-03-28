import React from 'react';
import {Row, Col } from 'antd';
import Buscador from './Components/search/'
import Encabezado from "./Components/encabezado/";
import Modal_Upload from "./Components/modal_upload/"
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div>
      <Row gutter={[16,40]}>
        <Col span={24}><Encabezado/></Col>
      </Row>
      <Row gutter={[16,40]} justify="end">
        <Col span={4}><Buscador/></Col> 
        <Col span={3}> <Modal_Upload/></Col>
      </Row>
     
    </div >
  );
  
}

export default App;
