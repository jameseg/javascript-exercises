const palindromes = function (word) {

  const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789"
  const cleanedString = word
    .toLowerCase()
    .split('')
    .filter(char => alphanumeric.includes(char))
    .join('')
  const reversedString = cleanedString.split('').reverse().join('')

  return cleanedString === reversedString



};

palindromes("racecar!")

// Do not edit below this line
module.exports = palindromes;
