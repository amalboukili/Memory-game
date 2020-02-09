import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './HighScoreInput.css';
import { saveHOFEntry } from '../hallOfFame/HallOfFame';
class HighScoreInput extends Component {
  state = { winner: '' };

  handleWinnerUpdate = (event) => {
    this.setState({ winner: event.target.value.toUpperCase() });
  };

  persistWinner = (event) => {
    event.preventDefault();
    const newEntry = { guesses: this.props.guesses, player: this.state.winner };
    saveHOFEntry(newEntry, this.props.onStored);
  };
  render() {
    return (
      <form className="highScoreInput" onSubmit={this.persistWinner}>
        <p>
          <label>
            Bravo ! Entre ton prenom :
            <input
              type="text"
              autoComplete="given-name"
              value={this.state.winner}
              onChange={this.handleWinnerUpdate}
            />
          </label>
          <button type="submit">J'ai gagne !</button>
        </p>
      </form>
    );
  }
}

HighScoreInput.propTypes = {
  guesses: PropTypes.number.isRequired,
  onStored: PropTypes.func.isRequired,
};
export default HighScoreInput;
