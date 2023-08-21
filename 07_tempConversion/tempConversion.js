const convertToCelsius = function(fahrenheit) {

  return +(5/9*(fahrenheit-32)).toFixed(1)
};

const convertToFahrenheit = function(celsius) {
  return +(celsius*1.8 + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
