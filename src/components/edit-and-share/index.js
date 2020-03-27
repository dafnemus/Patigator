import React from 'react';
import Ellipsis from './ellipsis';
import { Menu, Dropdown } from 'antd';
import { EditOutlined, ShareAltOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './style.css'

class EditAndShare extends React.Component {
  
 render(){

const menu = (
        <Menu className="menu-dropdown">
          <Menu.Item className="item" key="0"><ShareAltOutlined/> Compartir </Menu.Item>
          <Menu.Divider/>
        <Menu.Item className="item" key="1"><EditOutlined/> Editar </Menu.Item>
          </Menu>
          )
    return(
        <Dropdown overlay={menu} trigger={['click']}>
        <button className="ant-dropdown-link ellipsis" onClick={e => e.preventDefault()}>
        <Ellipsis/>
        </button>
        </Dropdown>
    )
  }
}

export default EditAndShare;
