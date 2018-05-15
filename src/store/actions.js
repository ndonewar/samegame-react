/* eslint-disable import/prefer-default-export */

import * as actionTypes from './actionTypes';

export const clickTile = id => ({
  type: actionTypes.CLICK_TILE,
  id,
});
