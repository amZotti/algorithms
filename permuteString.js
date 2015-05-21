//Write a recursive function for generating all permutations of an input string. Return them as an array.

function permuteString(str) {
  var results = [];
  var newStr = "";
  (function recurse() {
    if (newStr.length >= str.length) {
      results.push(newStr);
      return;
    }

    for (var i = 0;i < str.length;i++) {
      newStr += str[i];
      recurse();
      newStr = newStr.substring(0, newStr.length - 1);
    }
  })();
  return results;
}

var str = "omg I ";
console.log(permuteString(str));
