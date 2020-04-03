import React from 'react';
import { Modal, Button, Input, Divider } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import InputChange from './changeCategory';
import ChangeImage from './changeImage';
import ChangeAudio from './changeAudio';
import 'antd/dist/antd.css';
import './style.css';

class EditAudio extends React.Component {
  state = { visible: false };

  showModal = () => this.setState({ visible: true });
  handleOk = () => this.setState({ visible: false });
  handleCancel = () => this.setState({ visible: false });

  render() {
    return (
      <div>
        <Button className="open-modal" type="link" onClick={this.showModal}>
          <EditOutlined className="icon-edit" /> Editar
        </Button>
        <Modal
          title="Editar Audio"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Aceptar"
          cancelText="Cancelar"
          zIndex={2}>
          <ChangeImage />
          <Divider style={{ height: '0px', margin: '10px' }} />
          <label> Nombre </label>
          <Input />
          <Divider style={{ height: '0px', margin: '30px' }} />
          <label> Categorias </label>
          <InputChange zIndex={3} />
          <Divider style={{ height: '0px', margin: '20px' }} />
          <ChangeAudio />
        </Modal>
      </div>
    );
  }
}

export default EditAudio;

