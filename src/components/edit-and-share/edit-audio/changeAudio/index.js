import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

class ChangeAudio extends React.Component {
    state = {
    };
  
handleChange = info => {
      let fileList = [...info.fileList];
      fileList = fileList.slice(-1);
      fileList = fileList.map(file => {
        if (file.response) {file.url = file.response.url; }
        return file;
      });
     this.setState({ fileList });
    };
  
    render() {
      const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange: this.handleChange,
        multiple: true
      };
      return (
        <Upload {...props} fileList={this.state.fileList}>
              {this.info}
        </Upload>
      );
    }
  }
  
  export default ChangeAudio;
