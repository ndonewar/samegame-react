import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Scores = props => (
  <div className="scores">
    <div className="score-points">
      Points: <span id="points">{props.points}</span>
    </div>
    <div className="score-total">
      Total: <span id="total">{props.total}</span>
    </div>
  </div>
);

Scores.propTypes = {
  points: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  points: state.points,
  total: state.total,
});

export default connect(mapStateToProps)(Scores);
