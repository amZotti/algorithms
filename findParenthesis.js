/*
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

*/

function findParenthesis(str, index) {
  var stack = [];
  for (var i = index;i < str.length;i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else if (str[i] === ")") {
      stack.pop();
    }
    if (stack.length === 0) {
      return i;
    }
  }
  return -1;
}


var str = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";

console.log(findParenthesis(str, 10));
