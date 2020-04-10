import React, { Component } from 'react';
import { fetchAllRepro } from '../service/reproService.js';

class Index extends Component {
  state = {
    repro: []
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
      <div >
        {this.state.repro.map((elem) => (
          <div>
            <h1>{elem.name}</h1>
          </div>
        ))} 
      </div>
    );
  }
}

export default Index;
