/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable react/forbid-dom-props */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-magic-numbers */
import React from 'react';
import { Upload, message } from 'antd';

import ImageAudio from '../../../ImageAudio';
import 'antd/dist/antd.css';
import './style.css';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class ChangeImage extends React.Component {
  state = {
    loading: false,
  };

  uploadButton = (
    <div>
      <ImageAudio image={this.props.image} />
    </div>
  );

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) => this.setState({ imageUrl, loading: false }));
    }
  };

  render() {
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : this.uploadButton}
      </Upload>
    );
  }
}

export default ChangeImage;
