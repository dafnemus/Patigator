import React from 'react';
import { Modal, Button, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './style.css';
import InputChange from './changeCategory';


class EditAudio extends React.Component {
  state = { visible: false };

  showModal = () => this.setState({ visible: true });
  handleOk = () => this.setState({ visible: false });
  handleCancel = () => this.setState({ visible: false });
  
  render() {
    return (
      <div>
        <Button className="open-modal" type="link" onClick={this.showModal}><EditOutlined className="icon-edit"/> Editar </Button>
        <Modal
        className="modal"
          title="Editar Audio"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Aceptar"
          cancelText="Cancelar"
          zIndex={2}>
        <label> Nombre </label>
        <Input/>
        <InputChange zIndex={3}/>
        </Modal>
      </div>
    );
  }
}

export default EditAudio;

