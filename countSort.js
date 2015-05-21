//countSort is a non-comparison sorting algorithm which has O(n) time and space complexity.
//countSort essentially uses 1 'bucket' which is sized k
//Where k is the value of the largest integer in the dataset

function countSort(arr, k) {
  var numberFrequencies = new Array(k);
  for (var i = 0;i < k;i++) {
    numberFrequencies[arr[i]] = numberFrequencies[arr[i]] || 0;
    numberFrequencies[arr[i]]++;
  }

  var results = [];
  for (var value = 0;value < k;value++) {
    var occurences = numberFrequencies[value];
    if (occurences !== undefined) {
      for (var j = 0; j < occurences;j++) {
        results.push(value);
      }
    }
  }
  return results;
}

console.log(countSort([5,10,44,21,55,33,1,2,3,1,5,22,6], 56));
