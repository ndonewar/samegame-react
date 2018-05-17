import React from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile/Tile';

const Board = props => {
  const style = {
    height: props.boardHeight,
  };

  const className = `board ${props.theme}`;

  return (
    <div id="board" className={className} style={style}>
      {props.tiles.map(tile => (
        <Tile
          click={props.tileClick}
          col={tile.col}
          id={tile.id}
          key={tile.id}
          marked={tile.marked}
          row={tile.row}
          size={props.tileSize}
          type={tile.type}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  boardHeight: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
  tileClick: PropTypes.func.isRequired,
  tileSize: PropTypes.number.isRequired,
  tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Board;
