import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;

function Buscar() {
  return (
    <div>
      <Search
        placeholder=" "
        onSearch={value => console.log(value)}
        style={{ width: 210 }}
      />
    </div>
  );
}

export default Buscar;