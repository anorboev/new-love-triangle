/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var checked = [];
  var result = 0;

  for (let i = 1; i <= preferences.length; i++) {
    var current = preferences[i - 1];

    if(checked.includes(i))
      continue;

    if(preferences[current - 1] == i){
      checked.push(i);
      checked.push(current);
      continue;
    }

    if(preferences[preferences[current - 1] - 1] == i){
      checked.push(i);
      checked.push(current);
      checked.push(preferences[current - 1]);
      result++;
    }
  }

  return result;
};
