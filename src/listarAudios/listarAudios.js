/* eslint-disable react/no-unused-state */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-shadow */
/* eslint-disable new-cap */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { Row, Col } from 'antd';

import CardPlay from '../components/CardPlay';
import { getAllAudio } from '../service/reproService';
import { Provider } from '../Context/contex';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
      findNumber: (id) => this.state.data.filter((myData) => myData.id === id),
    };
  }

  componentDidMount() {
    this.ListAudios();
  }

  ListAudios = async () => {
    const response = await getAllAudio();
    console.log(response.data);
    this.setState({
      data: response.data,
      isLoaded: !!this.state.data,
    });
  };

  render() {
    const { isLoaded, data } = this.state;

    if (!isLoaded) {
      return <p>Cargando...</p>;
    }
    return (
      <Row justify="space-around">
        {data.map((data) => (
          <Col span={11} key={data.id}>
            <Provider value={data}>
              <CardPlay
                title={data.name}
                thumbsUp={data.thumbsUp}
                thumbsDown={data.thumbsDown}
                cover={data.image}
                audioSource={data.audio}
                id={data.id}
              />
            </Provider>
          </Col>
        ))}
      </Row>
    );
  }
}
