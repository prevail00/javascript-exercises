const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * 5 / 9;
  let decimal = Math.round((tempC % 1) * 10) / 10;
  if (tempC > 0) {
    tempC = Math.floor(tempC) + decimal;
  }
  else {
    tempC = Math.ceil(tempC) + decimal;
  }
  return tempC;
};

const convertToFahrenheit = function(tempC) {
  let tempF = tempC * 9 / 5 + 32;
  let decimal = Math.round((tempF % 1) * 10) / 10;
  if (tempF > 0) {
    tempF = Math.floor(tempF) + decimal;
  }
  else {
    tempF = Math.ceil(tempF) + decimal;
  }
  
  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
