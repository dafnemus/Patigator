import React, { Component } from 'react';
import CardPlay from "../components/CardPlay";
import { Row, Col } from 'antd';
//import { fetchAllRepro } from '../service/reproService.js';

export default class Example extends Component {

  constructor(props)
  {
     super(props);
     this.state = {
      isLoaded: false,
      data:[]
     }
  }

  componentDidMount(){

    var requestOptions = {
      method: 'GET',
      mode: 'no-cors',
    };
    //se removio la url para no exponer la api
    fetch(/*usar la url de la api*/"/api/audios", requestOptions)
    
      .then(response => response.json())
      .then(json => { console.log(json); this.setState({ isLoaded: true, data: json}); } )
      
      .catch(error => console.log('error', error));
  };

  render() {

    var {isLoaded, data} = this.state;

    if(!isLoaded) return <p>Cargando...</p>;
    else return (
      <>
        <Row justify="space-around">
          {(data.map(
            <Col span={11} key={data.id}>

              <CardPlay 
                title={data.name} 
                countLikes={data.thumbsUp}
                countDislikes={data.thumbsDown}
                cover={data.image}
                audioSource={data.audio}
              />
            </Col>
          ))}
        </Row>
      </>
    )
  }
}
