module.exports = function repeater(str, options) {
  let result = "";

  let givenParameters = {
    separator: "+",
    additionSeparator: "|",
    repeatTimes: 1,
    additionRepeatTimes: 1,
    addition: ""
  };
  if (!options.separator) {
    options.separator = givenParameters.separator;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = givenParameters.additionSeparator;
  }
  if (!options.repeatTimes) {
    options.repeatTimes = givenParameters.repeatTimes;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = givenParameters.additionRepeatTimes;
  }
  if (options.addition === undefined) {
    options.additionRepeatTimes = givenParameters.addition;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    result = result + str;

    for (let j = 0; j < options.additionRepeatTimes; j++) {
      result = result + options.addition;

      if (j < options.additionRepeatTimes - 1) {
        result = result + options.additionSeparator;
      }
    }

    if (i < options.repeatTimes - 1) {
      result = result + options.separator;
    }
  }

  return result;
};
// remove line with error and write your code here
