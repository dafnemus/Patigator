import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';
import './styles.css';

function Encabezado() {
    return (
        <PageHeader
            className = "site-page-header"
            class = "title.important"
            onBack={() => null}
            title="Patigator"
        />
        
    );
}
export default Encabezado;