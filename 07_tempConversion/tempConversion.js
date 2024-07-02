const convertToCelsius = function (fahrenheitTemp) {
  let celsius = (fahrenheitTemp - 32) * (5 / 9)

  if (celsius % 1 !== 0) {
    celsius = +celsius.toFixed(1)
  }

  return celsius
};

const convertToFahrenheit = function (celsiusTemp) {
  let fahrenheit = (celsiusTemp * (9 / 5) + 32)

  if (fahrenheit % 1 !== 0) {
    fahrenheit = +fahrenheit.toFixed(1)
  }

  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
