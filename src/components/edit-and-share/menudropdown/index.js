import React from 'react';
import { Menu } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import EditAudio from '../edit-audio'
import 'antd/dist/antd.css';


class MenuDropdown extends React.Component {
  render() {
    return(
        <Menu className="menu-dropdown">
          <Menu.Item className="item" key="0"><ShareAltOutlined/> Compartir </Menu.Item>
          <Menu.Divider/>
        <Menu.Item className="item" key="1"><EditAudio/></Menu.Item>
        </Menu>
    );
  };
};

export default MenuDropdown;
