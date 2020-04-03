import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

function Buscador() {
  return (
    <Search
      size="large"
      placeholder=" "
      onSearch={value => {}}
    />
  );
}

export default Buscador;
