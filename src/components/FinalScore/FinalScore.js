import React from 'react';
import PropTypes from 'prop-types';

const FinalScore = props => {
  const style = {
    // display: props.show ? 'block' : 'none',
    // position: props.show ? 'absolute' : 'relative',
    opacity: props.show ? 1 : 0,
    // top: props.show ? '10%' : '100%',
    zIndex: props.show ? 10 : -1,
  };

  return (
    <div className="final-score" style={style}>
      <div className="final-score-content">
        <strong>Game over!</strong>
        <br />
        <br />
        Final score: {props.score}
        <br />
        <br />
        <button className="link" onClick={props.newGameClick}>
          New game
        </button>
      </div>
    </div>
  );
};

FinalScore.propTypes = {
  newGameClick: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
};

export default FinalScore;
