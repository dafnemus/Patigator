import React from 'react';
import { Menu }  from 'antd';
import 'antd/dist/antd.css';


class Navbar extends React.Component {
  state={
      current:null
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item>
          Top 20 de los más escuchados
        </Menu.Item>
        <Menu.Item>
         
          Los más votados
        </Menu.Item>
        <Menu.Item>
          Los más recientes
        </Menu.Item>
    
        <Menu.Item>
         Categorias
        </Menu.Item>
      </Menu>
    );
  }
}


    export default Navbar;