import React, { Component } from 'react';
import Board from '../Board/Board';
import Scores from '../Scores/Scores';
import ThemeLinks from '../ThemeLinks/ThemeLinks';
import { generateTiles, chooseTile } from '../../util/tiles';

const numRows = 10;
const numCols = 20;
const tileSize = 40;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markedPoints: 0,
      theme: 'modern',
      totalPoints: 0,
      tiles: generateTiles(numCols, numRows),
    };
  }

  handleTileClick = tileId => {
    const results = chooseTile(this.state.tiles, tileId);

    this.setState({
      ...this.state,
      markedPoints: results.markedPoints,
      totalPoints: this.state.totalPoints + results.scoredPoints,
      tiles: results.tiles,
    });
  };

  handleThemeChange = theme => {
    this.setState({
      ...this.state,
      theme,
    });
  };

  render() {
    const boardHeight = numRows * tileSize;

    return (
      <section className="container">
        <Board
          boardHeight={boardHeight}
          theme={this.state.theme}
          tileClick={this.handleTileClick}
          tileSize={tileSize}
          tiles={this.state.tiles}
        />

        <Scores
          points={this.state.markedPoints}
          total={this.state.totalPoints}
        />

        <ThemeLinks linkClick={this.handleThemeChange} />
      </section>
    );
  }
}

export default Game;
