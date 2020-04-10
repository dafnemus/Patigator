import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import withRoot from "./withRoot.js";
import { fetchAllRepro } from "../service/reproService.js";

const styles = {
  root: {
    textAlign: "center",
    paddingTop: 200
  }
};

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
      <div className={this.props.classes.root}>
        {this.state.repro.map(elem => (
          <div>
            <h1>{elem.name}</h1>
            <h4>{elem.audio}</h4>
          </div>
        ))}
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
