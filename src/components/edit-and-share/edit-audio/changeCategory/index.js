import React from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css';

function InputChange() {
  const Option = Select;
  const children = [];
  for (let i = 10; i < 20 ; i++) {
    children.push(<Option key={i.toString(20) + i}>{i.toString(20) + i}</Option>);
  }
  return (
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="Categorias"
      defaultValue={['a10', 'c12']}
      listItemHeight={10}
      listHeight={250}
      zIndex={4}>
      {children}
    </Select>
  );
};

export default InputChange;

