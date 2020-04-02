import React from 'react';
import { Modal, Button } from 'antd';
import { ReactComponent as Logo } from './img/bg-upload.svg';
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
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
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
        </Modal>
      </div>
    );
  }
}

export default UploadSong;
