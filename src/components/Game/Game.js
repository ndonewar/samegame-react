import React from 'react';
import Board from '../Board/Board';
import Scores from '../Scores/Scores';
import ThemeLinks from '../ThemeLinks/ThemeLinks';

const Game = () => (
  <section className="container">
    <Board />

    <Scores points={0} total={0} />

    <ThemeLinks />
  </section>
);

export default Game;
