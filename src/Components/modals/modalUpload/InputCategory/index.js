import React from 'react';
import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './styles.css';

class Category extends React.Component {
  
  state = {
    items: ['Rock', 'Pop'],
    name: '',
    options: [],
  };

  onNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  addItem = () => {
    const { items, name } = this.state;
    
    this.setState({
      items: [...items, name],
      name: '',
    });
  };

  handleChange(value) {
  };

  render() {
    const { items, name, options } = this.state;
    const { Option } = Select;

    return (
      <Select mode="tags" style={{ width: '100%' }} className="margen" onChange={this.handleChange} tokenSeparators={[',']}
        placeholder="Seleccionar"
        dropdownRender={menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />

            <div className="Categoria">
              <Input style={{ flex: 'auto' }} value={name} onChange={this.onNameChange} />
              <a onClick={this.addItem} >
                <PlusOutlined /> Crear
              </a>
            </div>
          </div>
        )}
      > {options}
        {items.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    );
  }
}

export default Category;
