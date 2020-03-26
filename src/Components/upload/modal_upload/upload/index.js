import React from 'react'
import {Modal, Form, Input, Upload, message} from 'antd'
import {LoadingOutlined, PlusOutlined} from '@ant-desing/icons';

const SubirAudio = ({visible, onCancel, onCreate, form}) => {

    const {getFielDecorator} = form;

    function getBase64(img, callback){
      const reader = new FileReader();
      reader.addEventListener("load", ()=> callback(reader.result));
      reader.readAsDataURL(img);
    }

    function beforeUpload(file){
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if(!isJpgOrPng){

        message.error("Solo se puede subir archivos JPG/PNG!");
      }
      const isLt2m = file.size / 1024 / 1024 < 2;
      if(!isLt2m){
        message.error("La imagen tiene que pesar menos de 2MB!");
      }

      return isJpgOrPng && isLt2m;
    }

    return (

      <Modal
        visible={visible}
        title="Subir archivo nuevo"
        okText="Aceptar"
        onCancel={onCancel}
        onOk={onCreate}>

          



              

      </Modal>
    )
}