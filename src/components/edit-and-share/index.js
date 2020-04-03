import React from 'react';
import Ellipsis from './ellipsis';
import { Dropdown } from 'antd';
import MenuDropdown from './menudropdown';

import 'antd/dist/antd.css';
import './style.css';

function EditAndShare() {
  const menu = <MenuDropdown />
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <button className="ant-dropdown-link ellipsis" onClick={e => e.preventDefault()}>
        <Ellipsis />
      </button>
    </Dropdown>
  );
};

export default EditAndShare;
