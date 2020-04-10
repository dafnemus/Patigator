/* eslint-disable no-magic-numbers */
import React from 'react';
import { Row, Col } from 'antd';

import Buscador from './Components/search';
import Encabezado from './Components/encabezado';
import UploadSong from './Components/modals/modal_upload';
import CardPlay from './components/CardPlay';
import Navbar from './navbar';
import ListarAudios from './listarAudios';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <Row gutter={[16, 40]}>
        <Col span={24}>
          {' '}
          <Encabezado />{' '}
        </Col>
      </Row>
      <Row gutter={[16, 40]} justify="end">
        <Col span={4}>
          {' '}
          <Buscador />{' '}
        </Col>
        <Col span={3}>
          {' '}
          <UploadSong />{' '}
        </Col>
      </Row>
      <Navbar />
      <article>
        <CardPlay />
      </article>
      <ListarAudios />
    </div>
  );
}

export default App;
