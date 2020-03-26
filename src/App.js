import React from 'react';
import {Row, Col, Layout} from 'antd';
import BotonUpload from './Components/upload/'
import Buscador from './Components/search/'
import Encabezado from "./Components/encabezado/";
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
        <Col span={3}><BotonUpload/></Col>
      </Row>
    </div >
  );
}

export default App;
