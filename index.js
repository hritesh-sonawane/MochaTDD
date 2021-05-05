const Calculate = {
  factorial(inputNum) {
    // if inputNum = 0 OR inputNum = 1, the factorial will return 1
    if (inputNum === 0) {
      return 1;
    }

    for (var i = inputNum - 1; i >= 1; i--) {
      // we store the value of inputNum at each iteration
      inputNum *= i;
    }
    return inputNum;
  },
};

module.exports = Calculate;
