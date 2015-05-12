//Test if a string consisting of special symbols and characters is a palindrome without using any iteration

function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return str.split("").reverse().join("") === str;
}

console.log(palindrome("Noel - sees Leon")); //true
console.log(palindrome("Nsfesfes Leon")); //false
