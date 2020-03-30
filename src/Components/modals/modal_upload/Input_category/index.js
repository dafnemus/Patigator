import React from 'react';
import 'antd/dist/antd.css';
import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

let index = 0;

class Category extends React.Component {
  state = {
    items: ['Rock', 'Pop'],
    name: '',
  };

  onNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  addItem = () => {
    console.log('addItem');
    const { items, name } = this.state;
    this.setState({
      items: [...items, name || `New item ${index++}`],
      name: '',
    });
  };

  render() {
    const { items, name } = this.state;

    return (
      <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}
        
        placeholder="Seleccionar"
        dropdownRender={menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            
            <div style={{ 
                display: 'flex',
                flexWrap: 'nowrap',
                padding: 8 }}>
              <Input style={{ flex: 'auto' }} value={name} onChange={this.onNameChange} />
              <a
                style={{ flex: 'none',
                padding: '8px',
                display: 'block', 
                cursor: 'pointer' }}
                onClick={this.addItem}
              >
              <PlusOutlined /> Crear 
              </a>
            </div>
          </div>
        )}
      > {children}
        {items.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    );
  }
}

export default Category;