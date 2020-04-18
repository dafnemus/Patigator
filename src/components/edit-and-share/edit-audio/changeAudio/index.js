/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Button } from 'antd';
import { CloseOutlined, PaperClipOutlined } from '@ant-design/icons';

import UploadAudio from './UploadAudio';
import 'antd/dist/antd.css';

class ChangeAudio extends React.Component {
  state = {
    change: false,
  };

  handleChange = () => this.setState({ change: true });

  // document.getElementById("caja").style.display = "none"
  render() {
    return (
      <div>
        <PaperClipOutlined style={{ color: 'rgba(0, 0, 0, 0.65)' }} />
        <a href={this.props.urlAudio}>{this.props.urlAudio}</a>
        <Button type="link" change={this.state} onClick={this.handleChange}>
          <CloseOutlined style={{ color: 'rgba(0, 0, 0, 0.65)' }} />
        </Button>
        {this.state.change === true && <UploadAudio />}
      </div>
    );
  }
}

export default ChangeAudio;
