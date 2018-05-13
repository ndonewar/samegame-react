import React, { Component } from 'react';
import Board from '../Board/Board';
import Scores from '../Scores/Scores';
import ThemeLinks from '../ThemeLinks/ThemeLinks';

class Game extends Component {
  state = {
    points: 0,
    total: 0,
  };

  render() {
    const tileTypes = ['tile-a', 'tile-b', 'tile-c', 'tile-d', 'tile-e'];
    const boardHeight = 10;
    const boardWidth = 20;
    const tileSize = 40;

    return (
      <section className="container">
        <div id="game-container">
          <Board
            boardHeight={boardHeight}
            boardWidth={boardWidth}
            tileSize={tileSize}
            tileTypes={tileTypes}
          />

          <Scores points={this.state.points} total={this.state.total} />

          <ThemeLinks />
        </div>
      </section>
    );
  }
}

export default Game;
