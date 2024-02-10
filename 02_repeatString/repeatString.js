const repeatString = function(string, number) {
  if (number < 0) {
    return 'ERROR';
  } else if (number === 0) {
    return '';
  } 
  //else if (string === '') {
  //   return '';
  // }
  return string.repeat(number);
};

// Do not edit below this line
module.exports = repeatString;