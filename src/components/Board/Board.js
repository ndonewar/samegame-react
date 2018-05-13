import React from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile/Tile';

class Board extends React.Component {
  constructor(props) {
    super(props);

    const tileCount = props.boardHeight * props.boardWidth;

    for (let i = 0; i < tileCount; i += 1) {
      const tileLeft = (i % props.boardWidth) * props.tileSize;
      const tileTop = Math.floor(i / props.boardWidth) * props.tileSize;
      const tileType =
        props.tileTypes[Math.floor(Math.random() * props.tileTypes.length)];

      this.state.tiles.push({
        id: String(i),
        left: tileLeft,
        top: tileTop,
        type: tileType,
      });
    }
  }

  state = {
    tiles: [],
  };

  tileClickHandler = () => {
    // TODO
  };

  render() {
    return (
      <div id="board" className="board">
        {this.state.tiles.map(tile => (
          <Tile
            click={this.tileClickHandler}
            id={tile.id}
            left={tile.left}
            top={tile.top}
            type={tile.type}
          />
        ))}
      </div>
    );
  }
}

Board.propTypes = {
  boardHeight: PropTypes.number.isRequired,
  boardWidth: PropTypes.number.isRequired,
  tileSize: PropTypes.number.isRequired,
  tileTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Board;
