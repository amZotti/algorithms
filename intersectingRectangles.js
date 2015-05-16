var rect1 = {
  'x': 1,
  'y': 11,
  'width': 100,
  'height': 400
}

var rect2 = {
  'x': 1,
  'y': 11,
  'width': 10,
  'height': 4
}
console.log(findIntersection(rect1, rect2)); // { x: 1, width: 10, y: 11, height: 4 }

var rect3 = {
  'x': 1,
  'y': 11,
  'width': 10,
  'height': 10
}

var rect4 = {
  'x': 5,
  'y': 3,
  'width': 100,
  'height': 42
}
console.log(findIntersection(rect3, rect4)); // { x: 5, width: 6, y: 11, height: 10 }


function findIntersection(rect1, rect2) {
  var overlap = {};

  rect1.top = rect1.y + rect1.height;
  rect1.right = rect1.x + rect1.width;

  rect2.top = rect2.y + rect2.height;
  rect2.right = rect2.x + rect2.width;

  findOverlap(rect1, rect2, 'x', 'right', 'width', overlap);
  findOverlap(rect1, rect2, 'y', 'top', 'height', overlap);

  if (isNaN(overlap.width) || isNaN(overlap.height)) {
    return "No solution";
  }

  return overlap;
}

function findOverlap(rect1, rect2, coord, side, dimension, overlap) {

  var boundary = getBoundary(rect1, rect2, side);

  if (overlapExist(rect1[coord], rect2[coord], boundary)) {
    overlap[coord] = rect1[coord];
  } else if (overlapExist(rect2[coord], rect1[coord], boundary)) {
    overlap[coord] = rect2[coord];
  }

  overlap[dimension] = Math.abs(overlap[coord] - boundary);
}

function getBoundary(rect1, rect2, boundaryName) {
  var boundary;
  if (rect1.top < rect2.top) {
    boundary = rect1[boundaryName];
  } else {
    boundary = rect2[boundaryName];
  }
  return boundary;
}

function overlapExist(coord1, coord2, boundary) {
  return coord1 >= coord2 && coord1 <= boundary;
}
