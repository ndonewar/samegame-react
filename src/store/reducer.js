import * as actionTypes from './actionTypes';

const tileRows = 10;
const tileCols = 20;
const tileCount = tileRows * tileCols;
const tileSize = 40;
const tileTypes = ['tile-a', 'tile-b', 'tile-c', 'tile-d', 'tile-e'];

const tiles = Array.from(Array(tileCount), (v, i) => ({
  id: String(i),
  left: (i % tileCols) * tileSize,
  top: Math.floor(i / tileCols) * tileSize,
  type: tileTypes[Math.floor(Math.random() * tileTypes.length)],
}));

const initialState = {
  boardHeight: tileRows * tileSize,
  boardWidth: tileCols * tileSize,
  points: 0,
  total: 0,
  tileRows,
  tileCols,
  tiles,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.CLICK_TILE:
      console.log(`Tile ${action.id} clicked`);
      return newState;

    default:
      return state;
  }
};

export default reducer;
