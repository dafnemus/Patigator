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

  handleChange = () => {
    const invisible = document.getElementById('flotante');
    invisible.style.display = 'none';
    const icon = document.getElementById('icon');
    icon.style.display = 'none';
    const url = document.getElementById('url');
    url.style.display = 'none';
    this.setState({ change: true });
  };

  render() {
    return (
      <div>
        <PaperClipOutlined style={{ color: 'rgba(0, 0, 0, 0.65)' }} id="icon" />
        <a href={this.props.urlAudio} id="url">
          {this.props.urlAudio}
        </a>
        <Button type="link" id="flotante" change={this.state} onClick={this.handleChange}>
          <CloseOutlined id="flotante" style={{ color: 'rgba(0, 0, 0, 0.65)' }} />
        </Button>
        {this.state.change === true && <UploadAudio />}
      </div>
    );
  }
}

export default ChangeAudio;
