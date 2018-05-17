import React from 'react';
import PropTypes from 'prop-types';

const Tile = props => {
  const markedClass = props.marked ? 'mark' : '';
  const className = `tile ${props.type} ${markedClass}`;

  const style = {
    bottom: props.row * props.size,
    left: props.col * props.size,
  };

  return (
    <button
      className={className}
      onClick={() => props.click(props.id)}
      style={style}
    />
  );
};

Tile.propTypes = {
  click: PropTypes.func.isRequired,
  col: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  marked: PropTypes.bool.isRequired,
  row: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Tile;
