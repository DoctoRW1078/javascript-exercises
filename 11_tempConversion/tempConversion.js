const convertToCelsius = function(num) {
  return num = Math.round((num-32)*5*10/9)/10
};

const convertToFahrenheit = function(num) {
  return num = Math.round(((num*9/5)+32)*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
