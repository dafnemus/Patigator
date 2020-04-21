import React, { Component } from 'react';
import CardPlay from "../components/CardPlay";
import { Row, Col } from 'antd';
import { getAllAudio } from '../service/reproService.js';

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
      this.ListAudios();
  };

  ListAudios = async () => {
    const response = await getAllAudio();
    this.setState({ 
      data: response.data,
      isLoaded: !!this.state.data
    });
  };


  render() {

    var {isLoaded, data} = this.state;

    if(!isLoaded) return <p>Cargando...</p>;
    else return (
      <>
        <Row justify="space-around">
          {data.map(data => (
            <Col span={11} key={data.id}>

              <CardPlay 
                title={data.name}
                thumbsUp={data.thumbsUp}
                thumbsDown={data.thumbsDown}
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
