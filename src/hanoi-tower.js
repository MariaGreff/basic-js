module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber);
  return {
    turns: turns,
    seconds: turns / (turnsSpeed / 3600)
  };
  // remove line with error and write your code here
};
