// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((character, index) => {
    return character === str[str.length - index - 1];
  })
}

function reverse(str) {
  return str.split('').reduce( (reversed, character) =>  character + reversed, '')
}

module.exports = palindrome;

// Solution 2
// function palindrome(str) {
//   return str === reverse(str);
// }

// Solution 3
// function palindrome(str) {
//   if(str.length % 2 == 0) {
//     return str.slice(0, str.length/2) === reverse( str.slice(str.length/2, str.length) )
//   } else {
//     return str.slice(0, Math.round(str.length/2)-1) === reverse( str.slice(Math.round(str.length/2), str.length) )
//   }
// }