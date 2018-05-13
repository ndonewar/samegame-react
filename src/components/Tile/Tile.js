import React from 'react';
import PropTypes from 'prop-types';

const Tile = props => {
  const style = {
    top: props.top,
    left: props.left,
  };

  const className = `tile ${props.type}`;

  return (
    <button
      className={className}
      id={props.id}
      onClick={props.click}
      style={style}
    />
  );
};

Tile.propTypes = {
  click: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Tile;
