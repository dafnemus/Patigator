import React from 'react';
import { Menu }  from 'antd';
import 'antd/dist/antd.css';
import './style.css'


class Navbar extends React.Component {
  state = {
      current:null,
        };

  handleClick = e => {
    this.setState({ current: e.key, });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} className="ant-menu-horizontal" selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item className="menu-item"> Top 20 de los más escuchados </Menu.Item>
        <Menu.Item className="menu-item"> Los más votados </Menu.Item>
        <Menu.Item className="manu-item"> Los más recientes </Menu.Item>
        <Menu.Item className="menu-item"> Categorias </Menu.Item>
      </Menu>
    );
  }
}


 export default Navbar;
