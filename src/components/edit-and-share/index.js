import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import MenuDropdown from './menudropdown';

import 'antd/dist/antd.css';
import './style.css';

class EditAndShare extends React.Component {
  render() {
    const menu = <MenuDropdown />
    return (
      <Dropdown overlay={menu} zIndex={2} >
        <button className="ant-dropdown-link"
          onClick={e => e.preventDefault()}>
          <EllipsisOutlined />
        </button>
      </Dropdown>
    );
  };
};

export default EditAndShare;
