import React from 'react';
import { Upload, Button } from 'antd';
import { ReactComponent as Logo } from './img/bg-upload.svg'
import 'antd/dist/antd.css';
import './styles.css'


function ButtonUpload() {

    const props = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        previewFile(file) {
            console.log('Your upload file:', file);
            // Your process logic. Here we just mock to the same file
            return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
                method: 'POST',
                body: file,
            })
                .then(res => res.json())
                .then(({ thumbnail }) => thumbnail);
        },
    };
  
    return (
        <div>
            <Upload {...props} >
                <Button size="large" type="primary" className="upload" icon={<Logo id="upload-icon" width="22px" height="22px"/>}>
                    <p>Upload</p>
                </Button>
            </Upload>
      </div>
    );
}
export default ButtonUpload;
//onClick={this.showModal} 