import React from 'react';
import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './styles.css';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
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
    const { items, name } = this.state;
    this.setState({
      items: [...items, name || `New item ${index++}`],
      name: '',
    });
  };

  render() {
    const { items, name } = this.state;

    return (
      <Select mode="tags" style={{ width: '100%' }} className="margen" onChange={handleChange} tokenSeparators={[',']}
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
      > {children}
        {items.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    );
  }
}

export default Category;
