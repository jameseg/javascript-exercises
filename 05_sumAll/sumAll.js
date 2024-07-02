const sumAll = function (a, b) {
  if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
    return "ERROR"
  }

  let start = a
  let end = b

  if (a > b) {
    end = a;
    start = b
  }

  let sum = 0
  for (let i = start; i <= end; i++) {
    sum += i
  }

  return sum
};

sumAll(1, 10)
// Do not edit below this line
module.exports = sumAll;
