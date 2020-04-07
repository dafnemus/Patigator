import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

class MyUpload extends React.Component {
  state = {
  }

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-1);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
  };

  render() {
    const props = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange: this.handleChange,
      multiple: true,
    }
    return (
      <Upload {...props} fileList={this.state.fileList} >
        <Button className="margen" >
          <UploadOutlined /> Subir audio
        </Button>
      </Upload>
    );
  }
}

export default MyUpload;
