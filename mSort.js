//Implement MergeSort in JavaScript
console.log(mSort([4,2,1,2,5,2,4,6]));

function mSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var split = Math.floor(arr.length / 2);
  var left = mSort(arr.slice(0, split));
  var right = mSort(arr.slice(split));

  var result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  return result.concat(left).concat(right);
}
