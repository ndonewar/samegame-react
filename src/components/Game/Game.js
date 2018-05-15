import React from 'react';
import Board from '../Board/Board';
import Scores from '../Scores/Scores';
import ThemeLinks from '../ThemeLinks/ThemeLinks';

const Game = () => (
  <section className="container">
    <div id="game-container">
      <Board />

      <Scores />

      <ThemeLinks />
    </div>
  </section>
);

export default Game;
