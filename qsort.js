function qSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var middle = arr[arr.length - 1];
  var lower = [];
  var higher = [];

  for (var i = 0;i < arr.length - 1;i++) {
    if (arr[i] <= middle) {
      lower.push(arr[i]);
    } else {
      higher.push(arr[i]);
    }
  }

  return qSort(lower).concat(middle).concat(qSort(higher));
}

console.log(qSort([4,2,4,6,2,4,1,22,41,7]));
