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
      totalPoints: 0,
      tiles: generateTiles(numCols, numRows),
    };
    this.handleTileClick = this.handleTileClick.bind(this);
  }

  handleTileClick(tileId) {
    const results = chooseTile(this.state.tiles, tileId);

    this.setState({
      markedPoints: results.markedPoints,
      totalPoints: this.state.totalPoints + results.scoredPoints,
      tiles: results.tiles,
    });
  }

  render() {
    const boardHeight = numRows * tileSize;

    return (
      <section className="container">
        <Board
          boardHeight={boardHeight}
          tileClick={this.handleTileClick}
          tileSize={tileSize}
          tiles={this.state.tiles}
        />

        <Scores
          points={this.state.markedPoints}
          total={this.state.totalPoints}
        />

        <ThemeLinks />
      </section>
    );
  }
}

export default Game;
