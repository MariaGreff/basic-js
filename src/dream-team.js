module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  let result = "";
  let sort = members.filter(elem => typeof elem === "string");
  for (let i = 0; i < sort.length; i++) {
    while (sort[i][0] == " ") {
      sort[i] = sort[i].replace(" ", "");
    }
    let newArray = sort[i].split("");
    result = result + newArray.shift();
    result = result
      .toUpperCase()
      .split("")
      .sort()
      .join("");
  }
  return result;
};
// remove line with error and write your code here
