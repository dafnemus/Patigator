import React from 'react';
import { Modal, Button } from 'antd';
import { ReactComponent as Logo } from './img/bg-upload.svg';
import { Input } from 'antd';
import Avatar from './uploadCover';
import Category from './Input_category/';
import MyUpload from './button_upload/';
import 'antd/dist/antd.css';
import './styles.css';

class UploadSong extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button
          size="large"
          type="primary"
          className="upload"
          icon={<Logo className="upload-icon" />}
          onClick={this.showModal}
        >
          <p>Upload</p>
        </Button>
        <Modal
          title="Subir nuevo audio"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Aceptar"
          cancelText="Cancelar"
        >
          <Avatar />
          <p>Nombre</p>
          <Input placeholder="Escribir nombre del audio" />
          <p>Categoría</p>
          <Category />
          <MyUpload />
        </Modal>
      </div>
    );
  }
}

export default UploadSong;
