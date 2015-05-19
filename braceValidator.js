//Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

function validateBraces(str) {
  var stack = [];
  for (var i = 0;i < str.length;i++) {
    if (isOpeningBrace(str[i])) {
      stack.push(str[i]);
    } else if (closingBracesMatch(str[i], stack)) {
      stack.pop();
    }
  }
  return stack.length === 0;
}

function closingBracesMatch(closing, stack) {
  var opening = stack[stack.length - 1];
  return (opening === "(" && closing === ")") ||
    (opening === "[" && closing === "]") ||
    (opening === "{" && closing === "}");
}

function isOpeningBrace(character) {
  return character === '(' || character === '{' || character === '[';
}

console.log(validateBraces("{ [ ] ( ) }")) //should return true
console.log(validateBraces("{ [ ( ] ) }")) //should return false
console.log(validateBraces("{ [ }")) //should return false
