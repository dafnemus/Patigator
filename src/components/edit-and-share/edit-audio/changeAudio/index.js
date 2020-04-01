import React from 'react';
import {  Button } from 'antd';
import { CloseOutlined, PaperClipOutlined  } from '@ant-design/icons';
import UploadAudio from './UploadAudio';
import 'antd/dist/antd.css';

class ChangeAudio extends React.Component {
    state = {
      change: false
    };
   handleChange = () => this.setState({change : true});
  render() {
     return (
       <div >
         <PaperClipOutlined /> Url-Audio
         <Button type="link" handleChange={this.handleChange}><CloseOutlined/></Button>
         {this.state.change === true && <UploadAudio change={this.state.change}/>}
         </div>
      );
    }
  }
  
  export default ChangeAudio;
