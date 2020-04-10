import React from 'react';
import { Row, Col } from 'antd';
import Buscador from './components/search/';
import Encabezado from './components/encabezado/';
import UploadSong from './components/modals/modal_upload/';
import CardPlay from "./components/CardPlay";
import Navbar from './navbar';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <Row gutter={[16, 40]}>
        <Col span={24}> <Encabezado /> </Col>
      </Row>
      <Row gutter={[16, 40]} justify="end">
        <Col span={4}> <Buscador /> </Col>
        <Col span={3}> <UploadSong /> </Col>
      </Row>
      <Navbar />
      <article>
        <CardPlay />
      </article>
    </div>
  );
}

export default App;
