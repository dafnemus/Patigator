import React from 'react';
import { Menu } from 'antd';
import { EditOutlined, ShareAltOutlined } from '@ant-design/icons';


function MenuDropdown() {
  return (
    <Menu className="menu-dropdown">
      <Menu.Item className="item" key="0"><ShareAltOutlined /> Compartir </Menu.Item>
      <Menu.Divider />
      <Menu.Item className="item" key="1"><EditOutlined /> Editar </Menu.Item>
    </Menu>
  );
};

export default MenuDropdown;
