import React from 'react';
import PropTypes from 'prop-types';

const ThemeLinks = props => (
  <div className="themes">
    <button
      className="link theme-link"
      onClick={() => props.linkClick('modern')}
    >
      Modern theme
    </button>
    <button
      className="link theme-link"
      onClick={() => props.linkClick('classic')}
    >
      Classic theme
    </button>
  </div>
);

ThemeLinks.propTypes = {
  linkClick: PropTypes.func.isRequired,
};

export default ThemeLinks;
