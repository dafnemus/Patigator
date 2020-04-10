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
    this.setState({ repro: response.data.results });
  };

  render() {
    return (
      <div>
        {this.state.repro.map((elem) => (
          <div>
            <CardPlay elem={elem} />
          </div>
        ))}
      </div>
    );
  }
}

export default ListarAudios;
