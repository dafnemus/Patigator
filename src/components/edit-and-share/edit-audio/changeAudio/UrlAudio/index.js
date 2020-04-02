import React from 'react';
import { Button } from 'antd';
import { CloseOutlined, PaperClipOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

function UrlAudio() {
  return (
    <Button type="link">
      <PaperClipOutlined style={{ color: 'rgba(0, 0, 0, 0.65)' }} />
          Url-Audio
      <CloseOutlined style={{ color: 'rgba(0, 0, 0, 0.65)' }} />
    </Button>
  )
};

export default UrlAudio;
