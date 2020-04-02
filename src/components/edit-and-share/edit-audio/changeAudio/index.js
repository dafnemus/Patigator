import React from 'react';
import UrlAudio from './UrlAudio';
import UploadAudio from './UploadAudio';
import 'antd/dist/antd.css';

class ChangeAudio extends React.Component {
  state = {
    change: false
  };
  handleChange = () => this.setState({ change: true });
  render() {
    const { Audio } = this.state;
    return (
      <div >
        <UrlAudio change={this.state} onClick={this.handleChange} />
        {Audio ? <UploadAudio /> : <UrlAudio />}
      </div>
    );
  }
}

export default ChangeAudio;
