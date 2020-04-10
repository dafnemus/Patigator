/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-key */
import React from 'react';

import { fetchAllRepro } from '../service/reproService.js';
import CardPlay from '../components/CardPlay';

class ListarAudios extends React.Component {
  state = {
    repro: [],
  };

  componentDidMount() {
    this.readSong();
  }

  readSong = async () => {
    const response = await fetchAllRepro();
    console.log(response);
    this.setState({ repro: response.data.results });
  };

  render() {
    return (
      <div>
        {this.state.repro.map((elem) => (
          <div>
            <h1>{elem.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default ListarAudios;
