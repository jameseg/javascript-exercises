const repeatString = function (input, multiple) {

  if (multiple < 0) {
    return "ERROR"
  }
  return input.repeat(multiple)
};

// Do not edit below this line
module.exports = repeatString;
