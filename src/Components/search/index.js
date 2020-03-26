import React from 'react';
import 'antd/dist/antd.css';
import './styles.css'
import { Input } from 'antd';

const { Search } = Input;

function Buscardor() {
  return (
    <div>
      <Search 
        size="large"
        placeholder=" "
        onSearch={value => console.log(value)}
      />
    </div>
  );
}

export default Buscardor;