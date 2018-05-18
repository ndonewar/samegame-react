import React, { Component } from 'react';
import Board from '../Board/Board';
import Scores from '../Scores/Scores';
import ThemeLinks from '../ThemeLinks/ThemeLinks';
import FinalScore from '../FinalScore/FinalScore';
import { generateTiles, chooseTile, isGameOver } from '../../util/tiles';

const numRows = 10;
const numCols = 20;
const tileSize = 40;
const tiles = generateTiles(numCols, numRows);
const initialState = {
  gameOver: isGameOver(tiles),
  markedPoints: 0,
  theme: 'modern',
  tiles,
  totalPoints: 0,
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleTileClick = tileId => {
    if (!this.state.gameOver) {
      const results = chooseTile(this.state.tiles, tileId);

      this.setState({
        ...this.state,
        gameOver: results.gameOver,
        markedPoints: results.markedPoints,
        totalPoints: this.state.totalPoints + results.scoredPoints,
        tiles: results.tiles,
      });
    }
  };

  handleThemeChange = theme => {
    this.setState({
      ...this.state,
      theme,
    });
  };

  handleNewGameClick = () => {
    this.setState({
      ...initialState,
      tiles: generateTiles(numCols, numRows),
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

        <FinalScore
          newGameClick={this.handleNewGameClick}
          score={this.state.totalPoints}
          show={this.state.gameOver}
        />
      </section>
    );
  }
}

export default Game;
