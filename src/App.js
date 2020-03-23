import React from 'react';
import 'antd/dist/antd.css';
import ButtonSize from './upload'
import Buscar from './search'
import Encabezado from "./encabezado";
import { Row, Col, Divider } from 'antd';

import './App.css';

function App() {
  return (
    <div>
      <Encabezado />;
      <Row justify="end">
          <Col span={4}> <Buscar /></Col> 
          <Col span={3}> <ButtonSize /></Col>
      </Row>

    </div >
  );
}

export default App;
