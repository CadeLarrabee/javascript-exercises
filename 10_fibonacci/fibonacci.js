const fibonacci = function (numOfRepeats) {
  numOfRepeats = parseInt(numOfRepeats);
  if (numOfRepeats < 0) {
    return "OOPS";
  }

  let fibA = 1;
  let fibB = 1;
  let sum = 1;
  for (let i = 2; i < numOfRepeats; i++) {
    sum = fibA + fibB;
    fibA = fibB;
    fibB = sum;
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
