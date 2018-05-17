import React from 'react';
import Tile from '../Tile/Tile';
import { generateTiles, chooseTile } from '../../util/tiles';

const numRows = 10;
const numCols = 20;
const tileSize = 40;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markedPoints: 0,
      totalPoints: 0,
      tiles: generateTiles(numCols, numRows),
    };
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
    const style = {
      height: numRows * tileSize,
    };

    return (
      <div id="board" className="board" style={style}>
        {this.state.tiles.map(tile => (
          <Tile
            click={() => this.handleTileClick(tile.id)}
            key={tile.id}
            col={tile.col}
            marked={tile.marked}
            row={tile.row}
            size={tileSize}
            type={tile.type}
          />
        ))}
      </div>
    );
  }
}

export default Board;
