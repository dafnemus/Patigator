/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable new-cap */
/* eslint-disable react/no-unused-state */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-handler-names */
import React from 'react';
import { Modal, Button, Input, Divider } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { putEditAudio } from '../../../service/reproService';
import { Consumer } from '../../../Context/contex';

import InputChange from './changeCategory';
import ChangeImage from './changeImage';
import ChangeAudio from './changeAudio';
import 'antd/dist/antd.css';
import './style.css';
import '../../Colorsmodal/style.css';

class EditAudio extends React.Component {
  state = { visible: false, data: [] };

  showModal = () => this.setState({ visible: true });

  handleOk = () => {
    putEditAudio(data);
    this.setState({ visible: false });
  };

  handleCancel = () => this.setState({ visible: false });

  render() {
    // const data = { name, image, audio };
    return (
      <div>
        <Button className="open-modal" type="link" onClick={this.showModal}>
          <EditOutlined className="icon-edit" /> Editar
        </Button>
        <Consumer>
          {({ data, findNumber }) => (
            <Modal
              title="Editar Audio"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              okText="Aceptar"
              cancelText="Cancelar"
              zIndex={2}
            >
              <ChangeImage dataimage={data.image} />
              <Divider style={{ height: '0px', margin: '10px' }} />
              <label> Nombre </label>
              <Input placeholder={data.name} />
              <Divider style={{ height: '0px', margin: '30px' }} />
              <label> Categorias </label>
              <InputChange zIndex={3} />
              <Divider style={{ height: '0px', margin: '20px' }} />
              <ChangeAudio audio={data.audio} />
            </Modal>
          )}
          ;
        </Consumer>
      </div>
    );
  }
}

export default EditAudio;
