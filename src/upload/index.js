import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Button } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';

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
function ButtonSize() {
    return (
        <div>
            <Upload {...props}>
                <Button type="primary">
                <CloudUploadOutlined /> Upload
          </Button>
            </Upload>
        </div >
    );
}
export default ButtonSize;