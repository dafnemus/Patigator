import React from 'react';
import { Menu } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import EditAudio from '../edit-audio'
import 'antd/dist/antd.css';

class MenuDropdown extends React.Component {
  render() {
    return (
      <Menu className="menu-dropdown" style={{boxShadow: '2px 4px 8px 2px rgba(0, 0, 0, 0.2)'}}>
        <Menu.Item className="item" key="0"><ShareAltOutlined /> Compartir </Menu.Item>
        <Menu.Divider />
        <Menu.Item className="item" key="1"><EditAudio /></Menu.Item>
      </Menu>
    );
  };
};

export default MenuDropdown;
