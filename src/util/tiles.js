/* eslint-disable no-unused-vars */
const tileTypes = ['tile-a', 'tile-b', 'tile-c', 'tile-d', 'tile-e'];

export const generateTiles = (numCols, numRows) =>
  Array.from(Array(numCols * numRows), (v, i) => ({
    id: i,
    col: i % numCols,
    marked: false,
    row: Math.floor(i / numCols),
    type: tileTypes[Math.floor(Math.random() * tileTypes.length)],
  }));

const calculatePoints = tiles => {
  const numMarkedTiles = tiles.filter(tile => tile.marked).length;
  return numMarkedTiles === 0 ? 0 : (numMarkedTiles - 1) * (numMarkedTiles - 1);
};

const deleteMarkedTiles = tiles => ({
  points: calculatePoints(tiles),
  tiles: tiles.filter(tile => !tile.marked),
});

const unmarkAllTiles = tiles => tiles.map(tile => ({ ...tile, marked: false }));

const getTile = (tiles, id) => tiles.find(t => t.id === id);

const getTileByPosition = (tiles, col, row) =>
  tiles.find(t => t.col === col && t.row === row);

const getTopAdjacent = (tiles, tile) =>
  getTileByPosition(tiles, tile.col, tile.row + 1);

const getRightAdjacent = (tiles, tile) =>
  getTileByPosition(tiles, tile.col - 1, tile.row);

const getBottomAdjacent = (tiles, tile) =>
  getTileByPosition(tiles, tile.col, tile.row - 1);

const getLeftAdjacent = (tiles, tile) =>
  getTileByPosition(tiles, tile.col + 1, tile.row);

const isTileSameType = (tile1, tile2) => tile1.type === tile2.type;

const markTile = (tiles, tile) =>
  tiles.map(
    t =>
      t.id === tile.id
        ? {
            ...tile,
            marked: true,
          }
        : t
  );

const compactColumnsDown = prevTiles => {
  let doCheck = true;
  let tiles = [...prevTiles];
  while (doCheck) {
    doCheck = false;
    // eslint-disable-next-line no-loop-func
    tiles = tiles.map(tile => {
      if (tile.row > 0) {
        const bottomAdjacent = getBottomAdjacent(tiles, tile);
        if (!bottomAdjacent) {
          doCheck = true;
          return {
            ...tile,
            row: tile.row - 1,
          };
        }
      }
      return tile;
    });
  }
  return tiles;
};

const compactColumnsLeft = prevTiles => {
  let doCheck = true;
  let tiles = [...prevTiles];

  while (doCheck) {
    doCheck = false;
    const maxCol = tiles.reduce((acc, tile) => Math.max(acc, tile.col), 0);
    for (let i = 0; i < maxCol; i += 1) {
      if (tiles.filter(tile => i === tile.col).length === 0) {
        doCheck = true;
        tiles = tiles.map(
          t =>
            i + 1 === t.col
              ? {
                  ...t,
                  col: i,
                }
              : t
        );
      }
    }
  }
  return tiles;
};

const markAdjacentTiles = (prevTiles, tile) => {
  let tiles = markTile(prevTiles, tile);
  const top = getTopAdjacent(tiles, tile);
  const right = getRightAdjacent(tiles, tile);
  const bottom = getBottomAdjacent(tiles, tile);
  const left = getLeftAdjacent(tiles, tile);
  if (top && isTileSameType(tile, top) && !top.marked) {
    tiles = markTile(tiles, top);
    tiles = markAdjacentTiles(tiles, top);
  }
  if (right && isTileSameType(tile, right) && !right.marked) {
    tiles = markTile(tiles, right);
    tiles = markAdjacentTiles(tiles, right);
  }
  if (bottom && isTileSameType(tile, bottom) && !bottom.marked) {
    tiles = markTile(tiles, bottom);
    tiles = markAdjacentTiles(tiles, bottom);
  }
  if (left && isTileSameType(tile, left) && !left.marked) {
    tiles = markTile(tiles, left);
    tiles = markAdjacentTiles(tiles, left);
  }
  return tiles;
};

export const chooseTile = (prevTiles, id) => {
  let tiles = [...prevTiles];
  let points = 0;
  const tile = getTile(tiles, id);
  if (tile.marked) {
    ({ tiles, points } = deleteMarkedTiles(tiles));
    tiles = compactColumnsDown(tiles);
    tiles = compactColumnsLeft(tiles);
    return {
      markedPoints: 0,
      scoredPoints: points,
      tiles,
    };
  }
  tiles = unmarkAllTiles(tiles);
  tiles = markAdjacentTiles(tiles, getTile(tiles, id));
  if (calculatePoints(tiles) === 0) {
    tiles = unmarkAllTiles(tiles);
  }
  return {
    markedPoints: calculatePoints(tiles),
    scoredPoints: 0,
    tiles,
  };
};
