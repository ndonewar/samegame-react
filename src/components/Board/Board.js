import React from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile/Tile';

const Board = props => {
  const style = {
    height: props.boardHeight,
  };

  return (
    <div id="board" className="board" style={style}>
      {props.tiles.map(tile => (
        <Tile
          click={() => props.tileClick(tile.id)}
          key={tile.id}
          col={tile.col}
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
  tileClick: PropTypes.func.isRequired,
  tileSize: PropTypes.number.isRequired,
  tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Board;
