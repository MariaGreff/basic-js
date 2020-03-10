module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        counter = this.calculateDepth(arr[i]) + 1;
        result = Math.max(counter, result);
      }
    }
    return result;
  }
  // remove line with error and write your code here
};
