import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clickTile } from '../../store/actions';
import Tile from '../Tile/Tile';

const Board = props => {
  const style = {
    height: props.boardHeight,
  };

  return (
    <div id="board" className="board" style={style}>
      {props.tiles.map(tile => (
        <Tile
          click={() => props.clickTile(tile.id)}
          id={tile.id}
          key={tile.id}
          left={tile.left}
          top={tile.top}
          type={tile.type}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  boardHeight: PropTypes.number.isRequired,
  tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  boardHeight: state.boardHeight,
  tiles: state.tiles,
});

export default connect(mapStateToProps, { clickTile })(Board);
