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
  state = { visible: false };

  showModal = (data, id) => {
    this.setState({ visible: true });
    const [dataMusic] = data.filter((n) => n.id === id);
    this.setState({ ...dataMusic });
  };

  handleOk = async () => {
    const { id, categories, plays, updatedAt, image, audio, thumbsUp, thumbsDown, name } = this.state;
    const data = { id, categories, plays, updatedAt, image, audio, thumbsUp, thumbsDown, name };
    await putEditAudio(data);
    this.setState({ visible: false });
  };

  handleCancel = () => this.setState({ visible: false });

  render() {
    // const data = { name, image, audio };
    return (
      <div>
        <Consumer>
          {({ data, id }) => (
            <Button className="open-modal" type="link" onClick={() => this.showModal(data, id)}>
              <EditOutlined className="icon-edit" /> Editar
            </Button>
          )}
        </Consumer>
        <Modal
          title="Editar Audio"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Aceptar"
          cancelText="Cancelar"
          zIndex={2}
        >
          <ChangeImage
            image={this.state.image}
            onChange={(event) => {
              this.setState({ image: event.target.value });
            }}
          />
          <Divider style={{ height: '0px', margin: '10px' }} />
          <label> Nombre </label>
          <Input
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <Divider style={{ height: '0px', margin: '30px' }} />
          <label> Categorias </label>
          <InputChange zIndex={3} />
          <Divider style={{ height: '0px', margin: '20px' }} />
          <ChangeAudio
            urlAudio={this.state.audio}
            onChange={(event) => {
              this.setState({ audio: event.target.value });
            }}
          />
        </Modal>
      </div>
    );
  }
}

export default EditAudio;
