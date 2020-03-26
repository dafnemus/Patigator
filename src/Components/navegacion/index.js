import React from "react";
import {Menu} from 'antd';//, Typography 
import MenuItem from 'antd/lib/menu/MenuItem';
import 'antd/dist/antd.css';
import './styles.css'

//const {Title} = Typography;

function Navegacion() {
    return (
        <div>
            <Menu mode="horizontal" className="navegacion">
                <MenuItem>Top 20 mas escuchados</MenuItem>
                <MenuItem>Los mas votados</MenuItem>
                <MenuItem>Mas recientes</MenuItem>
                <MenuItem>Categorias</MenuItem>
            </Menu>
        </div>
    );
  }
  
  export default Navegacion;