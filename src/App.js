import React from 'react';
import {Row, Col, Layout} from 'antd';
import BotonUpload from './Components/upload/'
import Buscador from './Components/search/'
import Encabezado from "./Components/encabezado/";
import Navegacion from "./Components/navegacion/";
import Reproductor from "./Components/reproductor/"
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
      <Layout.Content>
        <Row gutter={[16,40]} justify="center">
          <Col span={23}><Navegacion/></Col>
        </Row>
        <Row  gutter={[8,8]} justify="center">
          <Col span={11}><Reproductor/></Col>
          <Col span={11}><Reproductor/></Col>
          <Col span={11}><Reproductor/></Col>
          <Col span={11}><Reproductor/></Col>
          <Col span={11}><Reproductor/></Col>
          <Col span={11}><Reproductor/></Col>
          <Col span={11}><Reproductor/></Col>
          <Col span={11}><Reproductor/></Col>
        </Row>
      </Layout.Content>
    </div >
  );
}

export default App;
